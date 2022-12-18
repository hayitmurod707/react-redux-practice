import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "Redux/users/action";
import "./style.css";
const Users = () => {
	const users = useSelector(state => state?.users?.count);
	const dispatch = useDispatch();
	console.log(users);
	return (
		<div className="users-container">
			<h1>Users</h1>
			<div>
				<button onClick={() => dispatch(increment())}>Increment</button>
				<span style={{ margin: "0 10px" }}>{users}</span>
				<button onClick={() => dispatch(decrement())}>Decrement</button>
			</div>
		</div>
	);
};
export default Users;
