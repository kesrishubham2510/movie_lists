import Head from 'next/head';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Movie List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Page Structure */}
      {/* Header:- To access various settings like and browse around */}
      {/* Navbar:- To select the genre */}
      {/* Results:-  */}
      <Header/>
      <Navbar/>
    </div>
  )
}
