

import { useState } from "react"; 
import axios from "axios"; 
import './Home.css'

export default function Home() {

    const [numbers, setNumbers] = useState(""); 
    const [id, setId] = useState("");
    const handler = () => { 
        axios 
            .get("http://20.244.56.144/numbers/"+{id})
            .then((response) => { 
                setNumbers(response.data); 
                console.log(numbers);
            }); 
    }; 
  
    return ( 
        <div className="home-container">
             <div className="home-content">
            <h3>Retrive the Numbers that are specified by you</h3>
            <h3>Number IDs: prime,even,random,fibo</h3>
            <div className="navi-buttons">
                <h4>Enter the Number ID :</h4>
                <input placeholder="Provide Number ID" type="text" required={true} className="form-control"  onChange={(e)=>setId(e.target.value)}/>
                <button onClick={handler}>Get Results</button>
                <h2>The Numbers Are</h2>
                <h2>{numbers}</h2>
            </div>
        </div>
        </div>
    ); 
} 
  
