import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "../TaskContext";
import alertify from "alertifyjs";
import { Alert } from "reactstrap";

function TaskList(){

    const {taskList, addTask} = useContext(TaskContext);

    const [newTask, setNewTask] = useState('');
    const [error, setError] = useState('');

    const handleAddTask = () => {
        if (newTask.trim() === ''){
            setError('Görev adı boş olamaz!')
            return;
        }
        addTask(newTask);
        setNewTask('');
        alertify.success('Görev Başarıyla Eklendi!')
    }
    return(
        <div>
            <h1>Görev Listesi</h1>
            {taskList.length === 0 ? (
                <Alert color="primary">Henüz bir görev yok</Alert>
            ): (

            <ul>
                {taskList.map((task, index) => (
                    <li key={index}>{task} - <Link to={`/task/${index}`}>Detaya Git</Link></li>
                ))}
            </ul>
)}
            <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
            <button onClick={handleAddTask}>Görev Ekle</button>
            {error && <p style={{color: 'red'}}>{error}</p>}

        </div>
    );
}
export default TaskList;