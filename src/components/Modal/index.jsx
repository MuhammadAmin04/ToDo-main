import { useRef } from "react";
import "./style.scss";

const index = ({ setModal, setTask, task }) => {
	const nameRef = useRef("");
	const numRef = useRef("");


	function addTask() {
		const newTask = {
			id: Date.now(),
			name: nameRef.current.value,
		};
		
		console.log(nameRef.current.value);
		setTask([...task , newTask]);

		console.log(newTask);
		setModal(false);

	}

	return (
		<div className="modalBack">
			<div className="modalContainer">
				<button className="closeBtn" onClick={() => setModal(false)}>
					X
				</button>
				<div className="title">
					<h1>Add new Task</h1>
				</div>
				<div className="body">
					<input
						ref={nameRef}
						className="name"
						type="text"
						placeholder="Enter a name"
					/>
				</div>
				<div className="footer">
					<button className="cancel" onClick={() => setModal(false)}>
						Cancel
					</button>
					<button onClick={() => addTask()} className="add">
						Add
					</button>
				</div>
			</div>
		</div>
	);
};

export default index;
