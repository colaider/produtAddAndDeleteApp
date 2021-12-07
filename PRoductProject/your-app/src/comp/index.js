import React, {useState} from 'react';
import Modal1 from "./modal1";
import Modal2 from "./modal2";
import { useSelector } from 'react-redux';
var arr = JSON.parse(localStorage.getItem("arr"))
var ine = -5;
var inr  = 0;
arr.forEach(el => {
   el.i = inr;
   inr++ 
});

const ProductList = () => {
   
   const[show, setShow] = useState(false)
   const[show1, setShow1] = useState(false)
   function fe(){
      setShow(true)
     ine = 0
   } 
   function delet(i) {
      setShow1(true)
      localStorage.setItem("index", JSON.stringify(i));
   }
   function openPage(i){
      localStorage.setItem("i", JSON.stringify(i));
      window.location.assign("/product");
      console.log(i)
   }
    return (
       <div>
          <div className="buttonDiv">
              <button className="mainBut" onClick={() => fe()}>press</button>
          </div>
          <Modal2 show1={show1}/>
          <Modal1 onClose={()=> setShow(false)} show={show}/>
          <div className="productWiew">
            {arr.map(el=><div><button onClick={()=>openPage(el.i)} style={{border:"none", background:"none"}}><div style={{marginLeft:30+"px", width:500+"px", borderRadius:10+"px",background:"#5F9EA0",marginLeft:"auto",marginRight:"auto"}}><h2>{el.name}</h2>
               <img style={{marginLeft:"auto",marginRight:"auto"}} src={el.url}></img>
               <h5 style={{marginLeft:"auto",marginRight:"auto"}}> {el.price}</h5>
            </div></button><button onClick={() => delet(el.i) }>delete</button></div>
            )}
          </div>
       </div>
    );
}
 
export default ProductList;