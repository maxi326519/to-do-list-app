import { bindActionCreators } from "redux";

export const ADD_TO_DO =  'ADD_TO_DO';
export const EDIT_TO_DO =  'EDIT_TO_DO';
export const COMPLETE_TO_DO = 'COMPLETE_TO_DO';
export const REMOVE_TO_DO = 'REMOVE_TO_DO';

export function addToDo(task){
    return {
        type: ADD_TO_DO,
        payload: task
    }
}

export function editToDo(id){
    return {
        type: COMPLETE_TO_DO,
        payload: id
    }
}

export function completeToDo(id){
    return {
        type: COMPLETE_TO_DO,
        payload: id
    }
}

export function removeToDo(id){
    return {
        type: REMOVE_TO_DO,
        payload: id
    }
}