

const Card = () => {
  return (
    <div className="container">
        <div className="todo-app">
            <h2>To-Do list <img src="../../images/icon.png" /></h2>
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