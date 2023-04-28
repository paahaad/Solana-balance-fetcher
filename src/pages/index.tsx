import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <main className={styles.main}>
      <h1>Solana Balance Fetcher</h1>
      <hr />
      <input type="text" placeholder='Enter address' />
      <br />
      <br />
      <button>Check SOL Balance</button>
    </main>
    </>
  )
}
