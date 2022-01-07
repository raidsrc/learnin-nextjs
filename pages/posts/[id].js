import Layout from '../../components/layout'

import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
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
      {props.postData.title}
      <br />
      {props.postData.id}
      <br />
      {props.postData.date}
    </Layout>
  )
}
