import { ethers } from 'ethers';
import ContratoABI from '../contractAbi.json'

const contractAddress = '0x18145188f281c3e0E8E0f566b2CB692Ac3576892';
const abi = ContratoABI;
const qntdTokens = 30;

// Conectar à rede da Mumbai
const provider = new ethers.providers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com');

// Obter a instância do contrato NFT
const contract = new ethers.Contract(contractAddress, abi, provider);

export interface NftOwner {
  id: number;
  owner: string;
}

  export async function getNftByOwner(address:`0x${string}`){
    const nfts: number[] = [];
    const owners: NftOwner[] = [];

    for (let i = 1; i < qntdTokens+1; i++) {
      const tokenId = ethers.BigNumber.from(i);
      const owner = await contract.ownerOf(tokenId);
      owners.push({ id: tokenId.toNumber(), owner });
    }

    for (let i = 0; i < qntdTokens; i++) {
      if(owners[i].owner == address){
        nfts.push(owners[i].id);
      }
    }
    // console.log(nfts)
    return nfts;
  }
  
  // Executar a função e imprimir a lista de proprietários
  // getOwners().then((owners) => {
  //   console.log(owners);
  // });