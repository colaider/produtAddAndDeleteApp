
import { useSelector } from 'react-redux';
import React,{useState} from 'react';
var arr= JSON.parse(localStorage.getItem("arr"))
var name =''
var url =''
var description = ''
var price = ''
var i = JSON.parse(localStorage.getItem("indr"))

const Modal3 = propse => {
    var a = propse.show3;
    
    function addNmae(val){
        name = val.target.value
    }
    function addUrl(val){
        url = val.target.value
    }
    function addDescr(val){
        description = val.target.value
    }
    function addprice(val){
        price = val.target.value
    }
    
   function addAr(){
       if(typeof parseInt(price, 10) == "number"){
        arr[i].name = name
        arr[i].url = url
        arr[i].description = description
        arr[i].price = price
       }else{
           alert("error")
       }
        localStorage.setItem("arr", JSON.stringify(arr));
        console.log(arr)
        window.location.reload();
    }


    if(!a == true){
        return(null);
    }else{
        return (
          <div className="modalWindow">
             <input type="text"  className="modalWindowInput" onChange={addNmae}></input>
             <input type="text"  className="modalWindowInput" onChange={addUrl}></input>
             <input type="text"  className="modalWindowInput" onChange={addDescr}></input>
             <input type="text"  className="modalWindowInput" onChange={addprice}></input>
             <div><button className="modalWindowBut" onClick={()=>addAr()} >pr4ess</button></div>
          </div> 
     );
    }
    
}
 
export default Modal3;