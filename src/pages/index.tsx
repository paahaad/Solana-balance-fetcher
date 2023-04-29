import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import getBalanceUsingJSONRPC from '../service'
import React, { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const monekeyAdd: string = '0xA9CB737826b9e2D4d4F88841148DA8B43944A3E8'
  const parvayAdd: string = '8VTXby1inY76KvwGcUFWWysBcHVT9GxhdHa2fYTwbxKj'
  const [address, setAdress] = useState('')
  const [balance, setBalance] = useState<string>('')
  function handleBalanceFetch(){
    const result = getBalanceUsingJSONRPC(address)
    result.then((r)=>{
      setBalance(String(r))
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <>
     <div className={styles.main}>
      <h1>Solana Balance Fetcher</h1>
      <hr />
      <input type="text" placeholder='Enter address' onChange={(e)=>setAdress(e.target.value)} />
      <br />
      <br />
      <button onClick={handleBalanceFetch}>Check SOL Balance</button>
      <br />
      
      {balance && <h3>Balacne: {balance}</h3>}
    </div>
    </>
  )
}
