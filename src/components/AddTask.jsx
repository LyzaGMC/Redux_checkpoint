import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const AddTask = () => {
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        const newTask = {
            id: Date.now(), // Utiliser un ID unique
            description,
            isDone: false,
        };
        dispatch(addTask(newTask));
        setDescription(''); // Réinitialiser le champ de saisie
    };

    return (
        <div>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ajouter une tâche"
            />
            <button onClick={handleAddTask}>Ajouter</button>
        </div>
    );
};

export default AddTask;
