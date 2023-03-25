import React,{useState} from 'react';


const Student = ({name,degree}) => {
    let [counter,setCounter] = useState(0);
    
  return (  
    <>
         <div>My Name is {name}</div>
        <div> My degree is {degree}</div>
        <p> Count {counter}</p>
        <button onClick={()=>{setCounter(counter--)}}> counter --</button>

        <button onClick={()=>{setCounter(counter++)}}> counter ++</button>
    </>
  )
}

export default Student