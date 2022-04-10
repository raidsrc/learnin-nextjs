import Head from 'next/head'
import Layout from '../components/layout'
import { getBigAssPieceOfData } from '../lib/posts'

export async function getServerSideProps() {
  const serverSideProps = await getBigAssPieceOfData()
  return {
    props: {
      serverSideProps
    }, // will be passed to the page component as props
  }
}


export default function A5(props) {
  return (
    <Layout>
      <Head>
        <title>Big SSR Page</title>
      </Head>
      <h1>Big SSR Page</h1>
      <p>uses getServerSideProps</p>
      <div>
        server side rendered this big piece of data
      </div>
      <div>
        {props.serverSideProps.map((item) => (
          <div>{String(Object.entries(item))}</div>
        ))}
      </div>
    </Layout>
  )
}
