import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Test1 from '../components/test1';

const Home: NextPage = () => {
  console.log('Home');
  return (
    <div>
      <Head>
        <title>browser-exchange-files</title>
        <meta name="description" content="browser-exchange-files" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-col items-center mt-4'>
        <h1 className="text-3xl font-bold">
          browser-exchange-files
        </h1>

        <Test1 />

      </main>

    </div>
  )
}

export default Home
