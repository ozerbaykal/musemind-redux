import { ADDTASK } from "../types/tasksTypes"



export const addNewTask = (task) => {
    return async dispatch => {
        dispatch(
            {
                type: ADDTASK,
                payload: task
            }
        )
    }

}