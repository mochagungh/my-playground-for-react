import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetchingUSUE() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const [post, setPost] = useState({});

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/posts/2')
			.then(res => {
				setLoading(false);
				setPost(res.data);
			})
			.catch(err => {
				setLoading(false);
				setPost({});
				setError('404 Not Found');
			});
	}, []);

	return (
		<>
			{loading ? 'loading ...' : post.title}
			{error ? error : null}
		</>
	);
}

export default DataFetchingUSUE;
