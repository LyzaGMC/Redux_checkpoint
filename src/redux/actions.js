// Action Types
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const EDIT_TASK = 'EDIT_TASK';

// Action Creators
export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task,
});

export const toggleTask = (id) => ({
    type: TOGGLE_TASK,
    payload: id,
});

export const editTask = (id, description) => ({
    type: EDIT_TASK,
    payload: { id, description },
});
