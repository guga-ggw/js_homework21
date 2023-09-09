export const addTodoAction = (payload) => ({
        type : "ADD_TODO",
        payload
})

export const deleteTodoAction = (payload) => ({
        type: 'DELETE_TODO',
        payload
})

export const completeTodoAction = (payload) => ({
        type: 'COMPLETE_TODO',
        payload
})