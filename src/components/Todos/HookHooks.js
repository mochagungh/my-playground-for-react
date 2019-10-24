import React, { useState } from 'react';
import './style.css';

const Todo = ({ todo, index }) => {
	return (
		<div className="todo">
			{todo.text} <Complete /> <AddTodo />
		</div>
	);
};

const AddTodo = () => {
	return (
		<button className="add-todo" onClick={handleSubmit}>
			X
		</button>
	);
};

const handleSubmit = e => {
	e.preventDefault();
	// if (!value) return;
	// AddTodo(value);
	// setTodos('');
};

const Complete = () => {
	return <button className="complete">Complete</button>;
};

const Todos = () => {
	const [todos, setTodos] = useState([
		{
			text: 'learn react Hooks',
			isComplete: false
		},
		{
			text: 'Meet your boy here',
			isComplete: false
		},
		{
			text: 'build awesome todo app',
			isComplete: false
		}
	]);

	return (
		<div className="app">
			<div className="todo-list">
				{todos.map((todo, index) => (
					<Todo key={index} index={index} todo={todo} />
				))}
			</div>
		</div>
	);
};

export default Todos;
