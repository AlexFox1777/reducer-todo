import React from 'react';
import styled from 'styled-components'
import Typography from "@material-ui/core/Typography";

const CompletedTrue = styled.p`
    text-decoration: line-through;
`;

export default function Todo(props) {

    const handleChange = () => {
        console.log("I am here");
        props.dispatch({type: 'COMPLETE_TODO', payload: props.todo.id});
    };
    return (
        <div onClick={handleChange}>
            {props.todo.completed === false ?
                <Typography>{props.todo.item}</Typography>
                :
                <CompletedTrue>{props.todo.item}</CompletedTrue>
            }
        </div>
    );
}