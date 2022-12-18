import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "Redux/counter/action";
import "./style.css";
const Counter = () => {
	const count = useSelector(state => state?.counter?.count);
	const dispatch = useDispatch();
	console.log(count);
	return (
		<div className="counter-container">
			<h1>Counter</h1>
			<div>
				<button onClick={() => dispatch(increment())}>Increment</button>
				<span style={{ margin: "0 10px" }}>{count}</span>
				<button onClick={() => dispatch(decrement())}>Decrement</button>
			</div>
		</div>
	);
};
export default Counter;
