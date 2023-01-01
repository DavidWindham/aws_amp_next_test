import Head from 'next/head'
import TestComponent from '../components/test_component';
import styles from '../styles/Home.module.css';
import Link from 'next/link';


export default function Home() {
  return (
    <div className={styles.container}>
      <TestComponent />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      
      </Head>
      <h1 className="title">
        Link <Link href="/folder/other-page">this page!</Link>
        A <a href="/folder/other-page">this page!</a>
      </h1>

    </div>
  )
}