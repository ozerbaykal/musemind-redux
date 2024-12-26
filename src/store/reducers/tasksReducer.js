import { ThemeColors } from "../../theme/colors"
import { ADDTASK } from "../types/tasksTypes"

const initialState = {
    tasks: [
        {
            id: 1,
            title: "dasboard dizayn",
            date: "26 Aralık 2024",
            status: "In Review"
        },
        {
            id: 2,
            title: "New tasks added",
            date: "26 Aralık 2024",
            status: "Complated"
        },
        {
            id: 3,
            title: "New tasks added",
            date: "26 Aralık 2024",
            status: "On Hold"
        },




    ],
    taskStatus: [
        {
            id: 1,
            status: "In Progress",
            value: 0,
            color: ThemeColors.blue
        },
        {
            id: 2,
            status: "In Review",
            value: 0,
            color: ThemeColors.pink
        },
        {
            id: 3,
            status: "On Hold",
            value: 0,
            color: ThemeColors.yellow
        },
        {
            id: 4,
            status: "Completed",
            value: 0,
            color: ThemeColors.green
        }
    ]
}

const tasksReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADDTASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        default:
            return state
    }

}


export default tasksReducer;