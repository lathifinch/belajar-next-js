// const MyBlog = () => (
// 	<div>
//   	<h1>Blog</h1>
// 	</div>
// )

// export default MyBlog

import posts from '../posts.json'
import Link from 'next/link'

export default () => (
	<div>
		<h1>Blog</h1>
		<ul>
			{
				Object.entries(posts).map((value, index) => (
					<li key={index}>
						<Link href="/blog/[id]" as={'blog/' + value[0]}>
							<a>{value[1].title}</a>
						</Link>
					</li>
				))
			}
		</ul>
	</div>
)

// hasil dari map adalah sbb, posts.json adalah object
// ["test",{"title":"test post","content":"Hey some post content"}]
// ["second",{"title":"second post","content":"Hey this is the second post content"}]

// saat posts.json adalah array
// ["0",{"test":{"title":"test post","content":"Hey some post content"}}]
// ["1",{"second":{"title":"second post","content":"Hey this is the second post content"}}]
