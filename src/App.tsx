import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { useWeb3Modal } from '@web3modal/wagmi/react'
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'

// 1. Get projectId
const projectId = '7c755aa5bd96e9a1625834900865fbe0'

// 2. Create wagmiConfig
const metadata = {
  name: 'Pi Projeto Vending Machine',
  description: 'Pi Projeto Vending Machine',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}