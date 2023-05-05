import React,{useState, useEffect} from "react";
function Counter() {
    const [message, setMessage] = useState("");
    const [counter, setCounter] = useState(0);
   
     useEffect(() => {
   if (counter===0)
     {
   setMessage('Haz click en iniciar')
   }
   else  {
     setMessage("El contador es "+ counter);
   }
      }, [counter]);
   
     return (
       <div >
         <h1>{message}</h1>
         <button onClick={()=>  setCounter(counter+1)}>INICIAR </button>
       </div>
     );
   }
   
   export default Counter;     
   