import Link from 'next/link'
import Head from 'next/head'

function HomePage(props) {
  return (
  	<div>
		<Head>
    		<title>Home</title>
    	</Head>
  		<h1>Welcome to Next.js!</h1>
  		<Link href="/blog">
  			<a>Blog</a>
  		</Link>
		<style jsx>{`
			h1 {
				font-size: 4rem;
			}
			a {
				font-size: ${props.size}rem;
			}
		`}</style>
  	</div>
  )
}

export default HomePage
