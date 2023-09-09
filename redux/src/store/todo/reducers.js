const initialState = {
    todoList : [],
    completedList : []
}

export const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return  {
                ...state,
                todoList : [...state.todoList, action.payload]
            }
        case "DELETE_TODO": 
            switch(action.payload.method) {
                case "NotCompleted":
                    return{
                        ...state,
                        todoList: state.todoList.filter(todo => todo.id !== action.payload.id)
                    }
                case "Completed" : 
                    return{
                        ...state,
                        completedList: state.completedList.filter(todo => todo.id !== action.payload.id)
                    }
                default:
                    return state
            }
        case "COMPLETE_TODO" : 
        return{
            todoList: state.todoList.filter(todo => todo.id !== action.payload.id),
            completedList : [...state.completedList, action.payload]
        }
        default  :  
            return state
        
        }

} 