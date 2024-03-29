import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const intialState = {
	loading: true,
	error: '',
	post: {}
};
const reducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_SUCCESS':
			return {
				loading: false,
				error: '',
				post: action.payload
			};
		case 'FETCH_ERROR':
			return {
				loading: false,
				error: '404 Not Found',
				post: {}
			};
		default:
			return state;
	}
};
function DataFetchingUR() {
	const [state, dispatch] = useReducer(reducer, intialState);

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/posts/2')
			.then(res => {
				dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
			})
			.catch(err => {
				dispatch({ type: 'FETCH_ERROR' });
			});
	}, []);
	return (
		<>
			{state.loading ? 'loading ...' : state.post.title}
			{state.error ? state.error : null}
		</>
	);
}

export default DataFetchingUR;
