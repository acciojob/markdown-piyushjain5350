import React ,{useState} from 'react';
import '../styles/App.css'


const App=()=>{
    let [val,setVal]=useState('');
    return(
        <div className="app">
            <div className="input-container">
                <h1>Heading</h1><span>This is some <strong>bold</strong> text.</span>
                
                <textarea placeholder='Enter Something' onChange={(e)=>setVal(e.target.value) }></textarea>
            </div>
            <div className="preview">
                <h1>{val}</h1>
            </div>
        </div>
    )
}   

export default App;
