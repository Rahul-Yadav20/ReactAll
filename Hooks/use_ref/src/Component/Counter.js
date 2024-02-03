// it will create mutable variable, so it will not re-render again and again 
// And it returns a object in which we have a current property {current: "value"}
// Directly use DOM elements


import React, { useEffect, useRef, useState } from 'react'
function Counter() {

    const [userInput, setuserInput] = useState("");


    // const [count, setCount] = useState();

    // If we use useState then everytime useEffect render when page loaded and when count is updating 
    // So count will update and state will update, So it will go in infinite loop

    // useEffect(()=>{
    //     setCount(count+1);
    // }, [count])


    // useRef to tackle the above problem
    // it will create mutable variable, so it will not re-render again and again 
    // And it returns a object in which we have a current property {current: "value"}
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    });

    const handleChange = (event) => {
        setuserInput(event.target.value);
    }

    return (
        <div>
            <input type="text" value={userInput} onChange={handleChange}></input>
            <h3>Number of times page render: {count.current}</h3>
        </div>
    )
}

export default Counter
