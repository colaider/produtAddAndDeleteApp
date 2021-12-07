
import { useSelector } from 'react-redux';
import React,{useState} from 'react';
var arr= JSON.parse(localStorage.getItem("arr"))
var name =''
var url =''
var description = ''
var price = ''
var i = 0
localStorage.setItem("in", JSON.stringify(i));

localStorage.setItem("arr", JSON.stringify(arr));

const ProductList = propse => {
 
    var a = propse.show;
    
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
       i = i +1
        arr.push({
            name: name,
            url: url,
            description:description,
            price:price,
            i:i
        })
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
 
export default ProductList;