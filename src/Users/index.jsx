import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "Redux/users";
import { getUsers } from "Redux/users/extra-reducers";
import "./style.css";
const Users = () => {
	const users = useSelector(state => state.users.users);
	const status = useSelector(state => state.users.status)
	const dispatch = useDispatch();
	const [user, setUser] = useState('');
	const addUsers = e => {
		e.preventDefault();
		if(user) {
			dispatch(addUser({name: user, id: 1}));
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
			{
				status === 'PENDING'?<div>Loading ...</div>:status === 'SUCCESS'?<ul>
				{users.map((name, index) => {
					return <li key={index}>
						<span>{name?.name}</span>
						<button type='button' onClick={() => {
							dispatch(removeUser(name?.id))
						}}>Delete</button>
					</li>
				})}
			</ul>:<div>ERROR</div>
			}
		</div>
	);
};
export default Users;
