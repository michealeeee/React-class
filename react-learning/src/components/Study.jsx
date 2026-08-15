import React, { useState } from "react"

function Study ({name,age,course}){
 const[count,setCount] = useState(0)
 const[name1,setName1] = useState("Hello Everyone")
 const[isOn,setIsOn] = useState(false)
    return(
        <div>
            
            <button onClick={() => setCount(count + 1)}>+</button>
                <h1>Count:{count}</h1>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={()=> setIsOn(!isOn)}>SWITCH</button>

             <h1>{isOn? "ON" : "OFF"}</h1>
             <h1>{name1}</h1>
             <button onClick={()=> setName1("This is a react class and Forum")}>Click</button>

             

            {/* <h2>{name}</h2>
            <h3>age:{age}</h3>
            <h4>course:{course}</h4> */}

           

        </div>
    )

    
}

export default Study;