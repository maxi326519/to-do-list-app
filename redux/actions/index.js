export const ADD_TO_DO =  'ADD_TO_DO';
export const REMOVE_TO_DO = 'REMOVE_TO_DO';

export function addToDo(){
    return dispatch => {
        return {
            type: ADD_TO_DO
        }
    }
}

export function removeToDo(){
    return dispatch => {
        return {
            type: REMOVE_TO_DO
        }
    }
}