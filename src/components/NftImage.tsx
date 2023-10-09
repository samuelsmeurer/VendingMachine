import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import './NftImage.css';
import ContratoABI from '../contractAbi.json'

const contractAddress = '0x18145188f281c3e0E8E0f566b2CB692Ac3576892';
const abi = ContratoABI;
const provider = new ethers.providers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com');

// const provider = new ethers.providers.JsonRpcProvider('https://rpc-mainnet.maticvigil.com/');
// const contractAddress = '0xee3c94f80A311411c9C07DdcC3Ef6Eca17Bd3361';
// const abi = [
//   'function tokenURI(uint256 tokenId) external view returns (string memory)',
//   'function ownerOf(uint256 tokenId) public view returns (address)',
// ];

interface Props {
  id: number;
}

const NftImage: React.FC<Props> = ({id}) => {
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    async function fetchMetadata() {
      try {
        const contract = new ethers.Contract(contractAddress, abi, provider);
        const owner = await contract.ownerOf(id);
        const tokenUri = await contract.tokenURI(id);
        const response = await fetch(tokenUri);
        const metadata = await response.json();
        const imageUri = metadata.image;
        const name = metadata.name;
        const description = metadata.description;
        const imageResponse = await fetch(imageUri);
        const blob = await imageResponse.blob();
        const imageUrl = URL.createObjectURL(blob);
        setImageUrl(imageUrl);
        setName(name);
        setDescription(description);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMetadata();
  }, []);

  return (
    <div className="nft-container">
      <img className="nft-image" src={imageUrl} alt="NFT" />
      <div className="nft-metadata">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default NftImage;
