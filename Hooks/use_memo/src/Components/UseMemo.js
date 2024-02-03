// useMemo hook similiar like useEffect but useEffect hook dosn't return any variable
// useMemo hook return a memoized value to store the output or anything
// It's use to optimise the performance of any application

import React, { useMemo, useState } from 'react'
function UseMemo() {

  const [value, setValue] = useState(0);
  const [show, setShow] = useState(false);
  
  const getValue = () => {
    return setValue(value + 1);
  }
  const checkNum = (num) =>{
    for (let index = 0; index < 10000000; index++) {
      num = num + 1;
    }
    return num;
  }

  // count store a memorize value that is value 
  const Count = useMemo(() => {
    return checkNum(value);
  }, [value]);

  return (
    <div>
      <button type="button" onClick={getValue}>Count</button>
      <p>Count me = {Count}</p>
      <button type="button" onClick={() => setShow(!show)}>
        { show ? "clicked me" : "i am Clicked"}
      </button>
    </div>
  )
}

export default UseMemo
