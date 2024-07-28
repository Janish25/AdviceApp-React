import {useState} from 'react'
import "./adviceapp.css"


const adviceapp = () => {
    const[advice,setadvice] = useState("Click to get Random Advice!");
    const[count,setcount] = useState(0);

    async function getadvice(){
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();

        setadvice(data.slip.advice);
        setcount((c)=> c+1);

        

    }
  return (
    <div>
       <h3>{advice}</h3>

       <button onClick={getadvice}> Get Advice</button>

     <h2>Got <b>{count}</b>  Advice</h2>  

    </div>
  )
}

export default adviceapp
