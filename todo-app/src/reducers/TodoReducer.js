export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589,
},
    {
        item: 'About reducers',
        completed: false,
        id: 38929234589,
    }];

export const todoReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TODO' :
            let newTodo = {item: action.payload, completed: false, id: Date.now()};
            return [...state, newTodo];

        case 'COMPLETE_TODO' :
            let id = action.payload;
            console.log(id);
            return state.map(item =>
                item.id === id ? {...item, completed: !item.completed} : item
            );

        case 'DELETE_TODOS' :
            return state.filter(todo => todo.completed === false);

        // case 'COMPLETE_TODO' : return [...state, item: action.payload, completed :false];
        default:
            return state;

    }
};