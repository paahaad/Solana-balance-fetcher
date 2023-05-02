import Head from 'next/head'
import Image from 'next/image'
import {PublicKey} from '@solana/web3.js'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {getBalanceUsingJSONRPC, getBalanceUsingWeb3} from '../service'
import React, { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const monekeyAdd: string = '0xA9CB737826b9e2D4d4F88841148DA8B43944A3E8'
  const parvayAdd: string = '8VTXby1inY76KvwGcUFWWysBcHVT9GxhdHa2fYTwbxKj'
  const [address, setAdress] = useState<string>('')
  const [balance, setBalance] = useState<string>('')
  function handleBalanceFetch(){
    setBalance('')
    // Change to String to PublicKey
    if(address.length<parvayAdd.length){ 
      alert('Wrong Addresss')
      return
    }
    const publicKey = new PublicKey(address)

    const result = getBalanceUsingWeb3(publicKey)
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
      
      {balance && <h3>Balacne: {Number(balance)/1000000000}</h3>}
    </div>
    </>
  )
}
