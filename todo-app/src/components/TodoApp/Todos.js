import React, {useContext} from 'react';

//Contexts
import {TodoContext} from "../../contexts/TodoContext";

//Components
import Todo from "./Todo";


export default function Todos() {

    const [todos, dispatch] = useContext(TodoContext);

    return(
        <div>
            {todos.map(todo=>
                <Todo key={todo.id} todo={todo} dispatch={dispatch} />
            )}
            <button onClick={() => dispatch({type: 'DELETE_TODOS'})}>Clean todos</button>
        </div>
    )
};