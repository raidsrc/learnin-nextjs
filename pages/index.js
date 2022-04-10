import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home(props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Title goes here.]</p>
      </section>
      <section>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {props.allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>

          ))}
        </ul>
        <h2>Other pages</h2>
        <Link href={"/a1"}>
          <a>A static HTML page</a>
        </Link>
        <br />
        <Link href={"/a2"}>
          <a>SSG page</a>
        </Link>
        <br />
        <Link href={"/a3"}>
          <a>SSR page</a>
        </Link>
        <br />
        <Link href={"/a4"}>
          <a>Big SSG page</a>
        </Link>
        <br />
        <Link href={"/a5"}>
          <a>Big SSR page</a>
        </Link>
        <br />
      </section>
    </Layout>
  )
}
