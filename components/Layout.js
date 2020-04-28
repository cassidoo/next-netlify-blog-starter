import Head from 'next/head'

import Header from './Header'

export default function Layout(props) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={props.description}></meta>
        <title>{props.title}</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <section className="layout">
        <Header siteTitle={props.siteTitle} />
        <div className="content">{props.children}</div>
      </section>
    </>
  )
}
