import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Accueil from '../components/home/Accueil'
import Footer from '../components/home/Footer'
import Header from '../components/home/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>V-art-otra</title>
        <meta name="description" content="Arts marketplace for everyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Accueil/>
    </>
  )
}

export default Home
