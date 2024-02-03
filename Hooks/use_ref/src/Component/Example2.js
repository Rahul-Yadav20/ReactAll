import React, { useRef, useState } from 'react'

function Example2() {
    const [colorName, setColorName] = useState("white");
    const inputRef = useRef();

    const handleChange = (e) => {
        setColorName(e.target.value)
    }

    const handleClick = () => {
        inputRef.current.focus(); // It will focus(highlight) on selected element
        // if(colorName==="black"){
        //     document.body.style.backgroundColor="white";
        // }
        inputRef.current.style.backgroundColor = colorName;

        // document.body.style.backgroundColor=colorName;


    }

    return (
        <div>
            {/* Giving the reference of "inputRef" object to input element using "ref" attribute or property */}
            <input type="text" value={colorName} onChange={handleChange} ref={inputRef}/><br />
            <button type="button" className="btn btn-primary mt-2" onClick={handleClick}>Submit</button>
        </div>
    )
}

export default Example2
