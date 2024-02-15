import { FcTodoList } from "react-icons/fc";


const Card = (props) => {
  return (
    <div className="container">
        <div className="todo-app">
            <h2>To-Do list <FcTodoList className="img"/></h2>
            <img src="props.icon" />
            <div class="row">
                <input type="text" id="input-box" placeholder="Add any task" />
                <button onclick="addTask()">Add</button>
            </div>
            <ul id="list-container">
            </ul>
        </div>
    </div>
  );
}

export default Card;