import React from "react";
import './App.css';
import Cardlist from "./component/cardList/Cardlist";
import Boys from "./component/Names/Boys";
import { useState } from "react";


const App = () => {

    const [state , setState] = useState(Boys)
    const [hide , setHide] = useState(false)

    const deleteHandler = (e , ind) => {

        setState(prev => prev.filter((ele , index) => {
            return (
                index !== ind
            )
        } ))
    }


    const fillHandler = (e) => {

        setState(prev => prev.filter (ele => ele.name.includes(e.target.value) ) )
    }
    
    
    return(
        
            <div className="mainContainer">

                <button onClick={() => setHide(!hide)} className="btn">{hide ?'Show' : 'Hide'}</button>

                <input className="input" placeholder="Enter Your Name" type="text" onChange={fillHandler} />

                <Cardlist state={state} show = {hide} name={state} deleteHandler={deleteHandler} />

            </div>
        
    )
}

export default App