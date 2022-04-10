import Head from 'next/head'
import Layout from '../components/layout'

export async function getStaticProps() {
  const staticProps = { name: "ray", age: 21 }
  return {
    props: {
      staticProps
    }, // will be passed to the page component as props
  }
}


export default function A2(props) {
  return (
    <Layout>
      <Head>
        <title>SSG Page</title>
      </Head>
      <h1>SSG Page</h1>
      <p>uses getStaticProps</p>
      <div>
        hi {props.staticProps.name}
      </div>
    </Layout>
  )
}
