// import { useRouter } from 'next/router'
import posts from '../../posts.json'
import Head from 'next/head'

// export default () => {
// 	const router = useRouter()
// 	const post = posts[router.query.id]
// 	if (!post) return <p></p>
// 	return (
// 		<>
// 			<h1>Blog Post</h1>
// 			<h3>{post.title}</h3>
// 			<p>{post.content}</p>
// 		</>
// 	)
// }

const Post = props => {
	return (
		<>
			<Head>
				<title>Post</title>
			</Head>
			<h1>Blog Post</h1>
			<h3>{props.post.title}</h3>
			<p>{props.post.content}</p>
		</>
	)
}

Post.getInitialProps = ({ query, pathname, asPath }) => {
	console.log('coba1')
	console.log(pathname)
	console.log('coba2')
	console.log(asPath)
	return {
		post: posts[query.id]
	}
}

export default Post
