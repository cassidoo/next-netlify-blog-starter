import Link from 'next/link'

export default function Header(props) {
  return (
    <header className="header">
      <nav className="nav" role="navigation" aria-label="main navigation">
        <Link href="/">
          <a>{props.siteTitle}</a>
        </Link>
        <Link href="/">
          <a>About me</a>
        </Link>
      </nav>
    </header>
  )
}
