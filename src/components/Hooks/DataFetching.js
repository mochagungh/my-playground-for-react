import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
	const [posts, setPosts] = useState({});
	const [postId, setPostId] = useState(1);
	const [idFromButton, setIdFromButton] = useState(1);

	const handleSubmit = () => {
		setIdFromButton(postId);
	};

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
			.then(res => {
				console.log(res);
				setPosts(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, [idFromButton]);

	return (
		<>
			<input
				type="text"
				value={postId}
				onChange={e => setPostId(e.target.value)}
			/>
			<button onClick={handleSubmit}>Fetch Data !</button>
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
