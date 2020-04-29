import Link from 'next/link'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import Layout from '../../components/Layout'
import getSlugs from '../../utils/getSlugs'

export default function BlogTemplate(props) {
  if (!props.frontmatter) return <></>

  return (
    <>
      <Layout pageTitle={`${props.siteTitle} | ${props.frontmatter.title}`}>
        <div className="back">
          ←{' '}
          <Link href="/">
            <a>Back to post list</a>
          </Link>
        </div>
        <article>
          <h1>{props.frontmatter.title}</h1>
          {props.frontmatter.hero_image && (
            <img
              src={props.frontmatter.hero_image}
              className="hero"
              alt={props.frontmatter.title}
            />
          )}
          <div>
            <ReactMarkdown source={props.markdownBody} />
          </div>
        </article>
      </Layout>
      <style jsx>{`
        article {
          width: 100%;
          max-width: 1200px;
        }
        h1 {
          font-size: 3rem;
        }
        h3 {
          font-size: 2rem;
        }
        .hero {
          width: 100%;
        }
        .back {
          width: 100%;
          max-width: 1200px;
          color: #00a395;
        }
      `}</style>
    </>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params

  const content = await import(`../../posts/${postname}.md`)
  const config = await import(`../../siteconfig.json`)
  const data = matter(content.default)

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    return getSlugs(context)
  })(require.context('../../posts', true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/post/${slug}`)

  return {
    paths, // An array of path names, and any params
    fallback: false, // so that 404s properly appear if something's not matching
  }
}
