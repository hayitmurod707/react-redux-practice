import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, getUsers, removeUser } from "Redux/users";
import "./style.css";
const Users = () => {
	const users = useSelector(state => state.users.users);
	const dispatch = useDispatch();
	const [user, setUser] = useState('');
	const addUsers = e => {
		e.preventDefault();
		if(user) {
			dispatch(addUser(user));
			setUser('')
		}
	};
	return (
		<div className="users-container">
			<h1>Users</h1>
			<button type='button' onClick={() => dispatch(getUsers())}>Get all users</button>
			<form onSubmit={addUsers}>
				<input type='text' value={user} onChange={e => setUser(e.target.value)} />
				<button type='submit'>Add</button>
			</form>
			<ul>
				{users.map((name, index) => {
					return <li key={index}>
						<span>{name}</span>
						<button type='button' onClick={() => {
							dispatch(removeUser(index))
						}}>Delete</button>
					</li>
				})}
			</ul>
		</div>
	);
};
export default Users;
