import icon from "../images/icon.png"

const Card = () => {
  const inputBox= document.getElementById("input-box")

  const listContainer= document.getElementById("list-container")

  const addTask = () => {
    // return(
    // //   if(inputBox.value === ''){
    // //     alert("You must write something")
    // // }
    // )
  }


  return (
    <div className="container">
        <div className="todo-app">
            <h2>To-Do list <img src={icon} /></h2>
            <div class="row">
                <input type="text" id="input-box" placeholder="Add any task" />
                <button onclick={addTask}>Add</button>
            </div>
            <ul id="list-container">
            </ul>
        </div>
    </div>
  );
}

export default Card;