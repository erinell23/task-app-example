import React, { useEffect, useState } from 'react'
//import { getTasks } from '../services/task';
import { listTasks } from '../data.json'
import { Tasks } from './Tasks';



export const ListTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const handleAddTask = () => {
        setTasks([
            ...tasks,
            {
                id:tasks.length+1,
                estado: false,
                descripcion: newTask
            }
        ]);
        setNewTask('');
    }
    useEffect(() => {
        /*getTasks().then((data) =>
            setTasks(data)
        ).catch(() =>
            setTasks([])
        );*/
        setTasks(listTasks);

    }, []);
    return (
        <>
            <Lista tasks={tasks} setTasks={setTasks} />
            <br/>
            <label className="px-4">Nueva tarea:</label>
            <div className="px-4 d-flex ">
                <input type="text" className="form-control me-3"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button className="btn btn-primary" onClick={handleAddTask}>Agregar</button>
            </div>
        </>
    )
}

export const Lista = React.memo(({ tasks, setTasks }) => {
    const handleCheckChange = ({ target }) => {
        setTasks(
            tasks.map(e => (e.id === parseInt(target.value)) ? { ...e, estado: target.checked } : e)
        );
    }
    const handleDeleteTask = (id) => {
        setTasks(
            tasks.filter(e => (e.id !== parseInt(id)) && e)
        );
    }
    return (
        <ul className="list-group list-group-flush">
            {
                tasks.map((e) =>
                    <Tasks
                        key={e.id}
                        task={e}
                        handleCheckChange={handleCheckChange}
                        handleDeleteTask={handleDeleteTask}
                    ></Tasks>
                )
            }
        </ul>
    )
})
