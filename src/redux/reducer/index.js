import { ADD_TO_DO, EDIT_TO_DO, COMPLETE_TO_DO, REMOVE_TO_DO } from "../actions";

/* 
    const data = {
        titulo: '',
        description: '',
        date: '',
        complete: false,
        id: 0
    }
*/

const initialState = {
    toDo: [
        {
            title: "Task 1",
            description: "This is a example description",
            date: '--/--/--',
            time: '--:--',
            complete: false,
            id: 1
        },
        {
            title: "Task 2",
            description: "",
            date: '--/--/--',
            time: '--:--',
            complete: false,
            id: 2
        }
    ]
}

var id = 3;

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case ADD_TO_DO:
            return{
                toDo: [
                    ...state.toDo,
                    {
                        ...action.payload,
                        complete: false,
                        id: id++
                    }
                ]
            }

        case EDIT_TO_DO:
            return{
                toDo: [
                    state.toDo.map( toDo => {
                        if(toDo.id === action.payload){
                            return {
                                ...action.payload,
                                id: toDo.id
                            }
                        }else{
                            return toDo
                        }
                    })
                ]
            }
            
        case COMPLETE_TO_DO:
            return{
                toDo: [
                    {
                        ...state.toDo.filter( toDo => toDo.id === action.payload ),
                        complete: true
                    },
                    ...state.toDo
                ]
            }

        case REMOVE_TO_DO:
            return{
                toDo: state.toDo.filter( toDo => toDo.id !== action.payload )
            }
        
        default:
            return{ ...state }
    }
}