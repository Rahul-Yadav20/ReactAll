// useLayoutEffect hook work syncronously and update the component or data before page rendering

// And useEffect hook work as Asyncronously and update the data after page rendering 

// So u can use useLauoutEffect where you want to update data before render


import React, { useLayoutEffect, useState } from 'react'

function UseLayout() {
    
    const [Num, setNum] = useState(0);
    // It'll call first because it's a syncronous hook
    // useLayoutEffect(()=>{
    //     console.log("use layout effect");
    // })

    // Everytime whenever Num is updating by 0 then it's giving a random number
    // But Becausing we are setting Num = 0 in onClick so useEffect will flick(display) 0 on Everytime whenever Num is updating by 0 then it's giving a random number
    // So it's a flickering issue 
    // useEffect(()=>{
    //     if(Num === 0){
    //         setNum(Num + (Math.random() * 100));
    //     }
    // }, [Num]);

    // So useLayoutEffect remove the flickering issue
    useLayoutEffect(()=>{
        if(Num === 0){
            setNum(Num + (Math.random() * 100));
        }
    }, [Num]);


  return (
    <div style={{textAlign: "center"}}>
      <p>{`Count me -> ${Num}`}</p>
      
      <button type="button" style={{backgroundColor: "red", cursor: "pointer", borderRadius: "10px", width: "100px", height: "50px", borderColor: "yellow"}} onClick={()=> setNum(0)}>Counter</button>

    </div>
  )
}

export default UseLayout
