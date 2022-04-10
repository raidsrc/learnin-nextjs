import Head from 'next/head'
import Layout from '../components/layout'

export async function getServerSideProps() {
  const serverSideProps = { name: "ray", age: 21 }
  return {
    props: {
      serverSideProps
    }, // will be passed to the page component as props
  }
}


export default function A3(props) {
  return (
    <Layout>
      <Head>
        <title>SSR Page</title>
      </Head>
      <h1>SSR Page</h1>
      <p>uses getServerSideProps</p>
      <div>
        server side rendered {props.serverSideProps.name} age {props.serverSideProps.age}
      </div>
    </Layout>
  )
}
