import Head from 'next/head'
import Layout from '../components/layout'
import { getBigAssPieceOfData } from '../lib/posts'


export async function getStaticProps() {
  const staticProps = await getBigAssPieceOfData()
  return {
    props: {
      staticProps
    }, // will be passed to the page component as props
  }
}

export default function A4(props) {
  return (
    <Layout>
      <Head>
        <title>Big SSG Page</title>
      </Head>
      <h1>Big SSG Page</h1>
      <p>uses getStaticProps to fetch something big</p>
      <div>
        static rendered this big piece of data 
      </div>
      <div>
        {props.staticProps.map((item) => (
          <div>{String(Object.entries(item))}</div>
        ))}
      </div>
    </Layout>
  )
}
