import Layout from '../components/Layout'

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <h1 className="title">Welcome!</h1>

        <p className="description">
        I am a full stack engineer with over 10 years of experience building scalable web applications and contributing to  technical strategy, product development and growth engineering.
        I’ve led teams in creating applications and features that deliver deep value to customers and that earn strong revenue.
        I believe that to build great software you need to deeply understand your customers.
        I’m fascinated by the mechanisms of learning and skill acquisition and find that one of the most rewarding aspects of being an experienced engineer is the opportunity to help other engineers grow their skills.
        </p>

      </Layout>
      <style jsx>{`
        .description {
          width: 100%;
          max-width: 1200px;
        }
      `}</style>
    </>
  )
}

export default About

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
