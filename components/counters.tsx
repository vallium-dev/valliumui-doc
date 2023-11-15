// Example from https://beta.reactjs.org/learn

import { useState } from "react";
import { Button } from "valliumui";
// import styles from "./counters.module.css";
function MyButton() {
	const [count, setCount] = useState(0);

	function handleClick() {
		setCount(count + 1);
	}

	return (
		<Button className="" onClick={handleClick}>
			Clicked {count} times
		</Button>
	);
}

export default function MyApp() {
	return <MyButton />;
}
