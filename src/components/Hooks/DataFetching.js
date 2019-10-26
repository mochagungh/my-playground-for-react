import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
	const [posts, setPosts] = useState({});
	const [postId, setPostId] = useState(1);

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
			.then(res => {
				console.log(res);
				setPosts(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, [postId]);

	return (
		<>
			<input
				type="text"
				value={postId}
				onChange={e => setPostId(e.target.value)}
			/>
			<li>{posts.title}</li>
		</>

		// <ul>
		// 	{posts.map(post => (
		// 		<li key={post.id}>
		// 			{post.id}
		// 			<br />
		// 			{post.title}
		// 		</li>
		// 	))}
		// </ul>
	);
}

export default DataFetching;
