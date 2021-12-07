import { useSelector } from 'react-redux';
import React, {useState} from 'react';
import Moadl3 from "./modal3"
var arr= JSON.parse(localStorage.getItem("arr"))
var i = JSON.parse(localStorage.getItem("i"))

localStorage.setItem("arr", JSON.stringify(arr));

const About = propse => {    
const[show3, setShow3] = useState(false)
 function changeInfo(){
   setShow3(true)
   localStorage.setItem("indr", JSON.stringify(i));
 }

    return (
        <div>
            <Moadl3 show3={show3}/>
            <h1 className="leftPad"s>{arr[i].name}</h1>
            <img className="leftPad" src={arr[i].url}></img>
            <h6 className="leftPad">{arr[i].description}</h6>
            <h1 className="leftPad">{arr[i].price = "$"}</h1>
            <button className="changeButton" onClick={()=>changeInfo()}>chnge</button> 
        </div>  
    );   
}
 
export default About;