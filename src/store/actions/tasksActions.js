import { Alert } from "react-native"
import { ADDTASK, DELETETASK, UPDATETASK } from "../types/tasksTypes"



export const addNewTask = (task) => {
    return async dispatch => {
        dispatch(
            {
                type: ADDTASK,
                payload: task
            }
        )
        Alert.alert("Task Eklendi")
    }

}

export const deleteTask = (id) => {
    return async dispatch => {
        dispatch(
            {
                type: DELETETASK,
                payload: id

            }
        )
        Alert.alert("Task Silindi")
    }

}
export const updateTask = (updatedtask) => {
    return async dispatch => {
        dispatch(
            {
                type: UPDATETASK,
                payload: updatedtask

            }
        )
        Alert.alert("Task Güncellendi")
    }

}