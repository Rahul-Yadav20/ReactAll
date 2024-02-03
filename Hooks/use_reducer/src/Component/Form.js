// useReducer similiar like useState but it has reducer function with state and action parameter

import React, { useReducer } from 'react';
import reducer from "./Reducer";

const initialState = {
    name: "World",
    age: 0
};

function Form() {

    const [data, dispatch] = useReducer(reducer, initialState);
    
    const handleClick = () => {
        // it sends the type of action to the reducer function to perform its job which is updating the state
        dispatch({ type: "increment_age" })
    }
    
    const handleChange = (e) => {

        // object in dispatch will be pass as argument to the "action" in reducer  function parameter
        dispatch({
            type: "changed_name",
            nextName: e.target.value
        })
    }
    
    return (
        <div className="text-center">
            <input type="text" value={data.name} onChange={handleChange} className="form-control-sm mt-5 mb-2"/><br />
            <button type="button" onClick={handleClick} className="btn btn-primary btn-sm ">Increment Age</button><br />
            <p className="mt-2">Hello <b>{data.name}</b>! Your age is <b>{data.age}</b>.</p>
        </div>
    )
}

export default Form
