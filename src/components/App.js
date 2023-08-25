import React ,{useState} from 'react';
import '../styles/App.css'


const App=()=>{
    let [val,setVal]=useState('');
    return(
        <div className="App">
            <div className="input-container">
                <input type="text" placeholder='Enter something' onChange={(e)=>setVal(e.target.value)} />
            </div>
            <div className="display-container">
                <p>{val}</p>
            </div>
        </div>
    )
}

export default App;
