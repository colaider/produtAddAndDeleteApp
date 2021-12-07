
import { useSelector } from 'react-redux';
import React,{useState} from 'react';

var arr= JSON.parse(localStorage.getItem("arr"))

const Modal2 = propse => {
 
var a = propse.show1;
    
   function del(){
        var i =  JSON.parse(localStorage.getItem("index"))
        arr.splice(i,1)
        localStorage.setItem("arr", JSON.stringify(arr));
        window.location.reload();
   }


    if(!a == true){
        return(null);
    }else{
        return (
          <div className="modalWindow">
             <div><button className="modalWindowBut" onClick={()=>del()} >delete</button></div>
          </div>
    );
    }
    
}
 
export default Modal2;