import React, {useContext, useEffect} from 'react'
import {TodoContext} from "../../contexts/TodoContext";
import {Form, Field, withFormik} from 'formik';
import * as Yup from 'yup';

const AddTodo = ({touched, status}) => {
    const [todos, dispatch] = useContext(TodoContext);

    useEffect(() => {
        if (status) {
            dispatch({ type: 'ADD_TODO', payload: status.todo});
        }
    }, [status]);

    return (
        <div>
            <Form>
                <Field type="text" name="todo" placeholder="Todo.."/>
                <button type="submit">Add todo</button>
            </Form>
        </div>
    )
};

const FormikTodosForm = withFormik({
    mapPropsToValues({todo}) {
        return {
            todo: todo,
        }
    },
    validationSchema: Yup.object().shape({
        todo: Yup.string().required(),
    }),
    handleSubmit(values, {setStatus}){
       setStatus(values);
    }
})(AddTodo);

export default FormikTodosForm;