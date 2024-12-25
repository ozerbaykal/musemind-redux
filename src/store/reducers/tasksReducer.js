import { ADDTASK } from "../types/tasksTypes"

const initialState = {
    tasks: []
}

const tasksReducer = (state = initialState, action) => {

    switch (type.action) {
        case ADDTASK:
            return {
                ...state,
                tasks: state.tasks.push(action.payload)
            }
        default:
            return state
    }

}


export default tasksReducer;