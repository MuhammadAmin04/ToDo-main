import { useState, useRef  ,useEffect} from "react";
import ListItem from "./components/UI/List/ListItem";
import { ToastContainer, toast } from "react-toastify";
import Modal from "./components/Modal/index";
import index from "./components/Modal/index";
import axios from "axios";

const App = () => {
	const [modal, setModal] = useState(false);
	const [task, setTask] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos")
			.then((response) => response.json())
			.then((data) => setTask(data));
	}, []);
	 
	function deleteTodo(id){
		const filtered = task.filter((el) => {
			return id !== el.id
		})

		setTask(filtered);
	}

	return (
		<div className="container mx-auto">
			<ToastContainer />
			<div className="wrapper mx-auto mt-8 w-[800px] bg-green-200 p-2">
				<div className="task">
					<h2 className="text-center font-semibold text-green-600 my-3">
					Tasks
					</h2>
					<div className="task-header p-2 bg-cyan-100 flex gap-x-2">
						<button
							onClick={() => {
								setModal(true);
							}}
							className="bg-green-500 px-3 py-2 rounded-lg  text-white active:bg-green-700"
						>
							Add new task
						</button>
					</div>

					{modal ? (
						<Modal
							setModal={setModal}
							task={task}
							setTask={setTask}
						/>
					) : (
						""
					)}
				</div>
				<div className="wrapper" >
					{task.length
						? task.map((item,index) => {
								return (
									<ListItem
										deleteTodo={deleteTodo}
										key={index}
										name={item.title}
										num={index}
										names={item.name}
										id={item.id}
									/>
								);
						  })
						: "task is Empty"}
				</div>
			</div>
		</div>
	);
};

export default App;
