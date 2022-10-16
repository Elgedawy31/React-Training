import React from "react";
import './Cardlist.css';

const Cardlist = ({name , type , deleteHandler , show , state }) => {

    const map = name.map((ele , ind) => {
        return (
            <div  className={`cardWrapper ${show ? 'hide' :'show'}`} key={ind} style={{ backgroundColor: type ==='girl' ? 'tomato' : 'gray' ,
            color : type ==='girl' ? 'black' : 'white' }}>

                <div>Name : {ele.name}</div>
                <div>Age : {ele.age}</div>
                <div>Phone : {ele.phone}</div>
                <div>Address : {ele.address}</div>
                <span onClick={(e)=> deleteHandler( e  ,   ind)}>x</span>
            </div>
        )
    })
    
    return(

        <>
            <h1 >{state.length === 0 ? '' :'boys Data'}</h1>

            <div>{map}</div>
        </>
    )
}


export default Cardlist