import { ADDTASK } from "../types/tasksTypes"



export const addTasks = () => {
    return async dispatch => {
        dispatch(
            {
                type: ADDTASK,
            }
        )
    }

}