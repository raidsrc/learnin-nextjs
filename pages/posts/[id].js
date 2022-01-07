import Layout from '../../components/layout'
import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post(props) {
  return (
    <Layout>
      <Head>
        <title>{props.postData.title}</title>
      </Head>
      {props.postData.title}
      <br />
      {props.postData.id}
      <br />
      {props.postData.date}
      <div dangerouslySetInnerHTML={{ __html: props.postData.contentHtml }} />
    </Layout>
  )
}
