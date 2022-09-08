
const defaultState = {
    lists: [
        {id: 1, name: 'List 1'},
        {id: 2, name: 'List 2'}
    ],
    tasks: [
        {id: 1, done: false, name: 'Task 1', description: 'Task 1', duedate: '2022-09-08', list_id: 1},
        {id: 2, done: false, name: 'Task 2', description: 'Task 2', duedate: '2022-09-08', list_id: 2},
        {id: 3, done: false, name: 'Task 3', description: 'Task 3', duedate: '2022-09-09', list_id: 1}
    ]
}

const ADD_TASK ="ADD_TASK"
const DELETE_TASK = "DELETE_TASK"
const CHANGE_TASK = "CHANGE_TASK"
const CHANGE_DONE_TASK = "CHANGE_DONE_TASK"
const ADD_LIST = "ADD_LIST"
const DELETE_LIST = "DELETE_LIST"



const reducer = (state = defaultState, action) => {
    console.log(state)
    switch (action.type) {
        case "ADD_TASK":

            // return {...state, tasks: [...tasks, action.payload]}
        case "DELETE_TASK":
            // return {...state, tasks: [...tasks.map(task => task.id === action.payload ? undefined : task)]}
        case "CHANGE_TASK":
            // return {...state, tasks: [...tasks.map(task => task.id === action.payload.id ? action.payload : task)]}
        case "CHANGE_DONE_TASK":
            // return {...state, tasks: [...tasks.map(t => t.id === action.payload.id ? action.payload : t)]}
        case "ADD_LIST":
            // return {...state, lists: [...lists, action.payload]}
        case "DELETE_LIST":
            // return {...state, lists: [...lists, [...lists.map(list => list.id === action.payload ? undefined : list)]]}
        default:
            return state
    }
}

export default reducer


export const addTask = (options) => ({
        type: ADD_TASK,
        payload: options
    })










