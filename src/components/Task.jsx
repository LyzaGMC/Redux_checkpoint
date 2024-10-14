import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/actions';

const Task = ({ task }) => {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTask(task.id));
    };

    const handleEdit = () => {
        const newDescription = prompt("Modifier la tâche :", task.description);
        if (newDescription) {
            dispatch(editTask(task.id, newDescription));
        }
    };

    return (
        <div>
            <input type="checkbox" checked={task.isDone} onChange={handleToggle} />
            <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
                {task.description}
            </span>
            <button onClick={handleEdit}>Modifier</button>
        </div>
    );
};

export default Task;
