import React, {useReducer} from 'react';
import './App.css';

//Components
import TodoApp from "./components/TodoApp/TodoApp";

//Context
import {TodoProvider} from "./contexts/TodoContext";

//Reducers
import {initialState, todoReducer} from "./reducers/TodoReducer";

function App() {
    const [todos, dispatch] = useReducer(todoReducer, initialState);

    return (
        <div className="App">
            <TodoProvider value={[todos, dispatch]}>
            <TodoApp/>
            </TodoProvider>
        </div>
    )
}

export default App;
