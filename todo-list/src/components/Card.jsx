import React, { useState, useEffect } from 'react';
import icon from "../images/icon.png";

const Card = () => {
    const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('data')) || []);
    const [input, setInput] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState('');

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if(input === ''){
            alert("You must write something");
        }
        else{
            setTasks([...tasks, { text: input, checked: false }]);
            setInput('');
        }
    };

    const toggleCheck = index => {
        setTasks(tasks.map((task, i) => i === index ? {...task, checked: !task.checked} : task));
    };

    const startEditTask = (index, text) => {
        setEditIndex(index);
        setEditText(text);
    };

    const finishEditTask = () => {
        if(editText){
            setTasks(tasks.map((task, i) => i === editIndex ? {...task, text: editText} : task));
        }
        setEditIndex(null);
    };

    const handleKeyDown = (event) => {
        if(event.key === 'Enter') {
            finishEditTask();
        }
    };

    const deleteTask = (index, event) => {
        event.stopPropagation();
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="container">
            <div className="todo-app">
                <h2>To-Do list <img src={icon} /></h2>
                <div className="row">
                    <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Add any task" />
                    <button onClick={addTask}>Add</button>
                </div>
                <ul id="list-container">
                    {tasks.map((task, index) => (
                        <li key={index} className={task.checked ? 'checked' : ''} onClick={() => toggleCheck(index)}>
                            {editIndex === index ? (
                                <input type="text" value={editText} onChange={e => setEditText(e.target.value)} onBlur={finishEditTask} onKeyDown={handleKeyDown} autoFocus />
                            ) : (
                                task.text
                            )}
                            <span className="edit" onClick={(event) => {event.stopPropagation(); startEditTask(index, task.text);}}>✎</span>
                            <span onClick={(event) => deleteTask(index, event)}>×</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Card;













