import Layout from '../components/Layout'

const About = () => {
  return (
    <>
      <Layout pathname="/about">
        <h1 className="title">Welcome to this demo blog!</h1>

        <p className="description">
          This is a simple blog built with Next, easily deployable on{' '}
          <a href="https://url.netlify.com/r1j6ybSYU">Netlify</a>.
        </p>

        <p>
          You can check out the{' '}
          <a href="https://github.com/cassidoo/next-netlify-blog-starter">
            repo here.
          </a>
        </p>

        <p>
          This project includes a basic layout and header, base styles, dynamic
          routing with getStaticPaths, and posts saved as Markdown.
        </p>
      </Layout>
    </>
  )
}

export default About
