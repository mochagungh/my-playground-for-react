import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then(res => {
				setPosts(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<ul>
			{posts.map(post => (
				<li key={post.id}>
					{post.id}
					<br />
					{post.title}
				</li>
			))}
		</ul>
	);
}

export default DataFetching;
