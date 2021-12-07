import { useSelector } from 'react-redux';
import React,{useState} from 'react';
var arr= JSON.parse(localStorage.getItem("arr"))

function SortC(){
    arr.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        // a должно быть равным b
        return 0;
      });
      localStorage.setItem("arr", JSON.stringify(arr));
      window.location.reload();
}
function SortN(){
  arr.sort(function (a, b) {
      if (a.price > b.price) {
        return 1;
      }
      if (a.price < b.price) {
        return -1;
      }
      // a должно быть равным b
      return 0;
    });
    localStorage.setItem("arr", JSON.stringify(arr));
    window.location.reload();
}
const Header = propse => {
 
    
        return (
          
          <div className="Header">
             <div class="dropdown">
              <button class="dropbtn">Dropdown</button>
              <div class="dropdown-content">
             <button onClick={() => SortC()}>sort by char</button>
             <button onClick={() => SortC()}>sort by num</button>
  </div>
</div>
          </div>
          
    );
    }
export default Header;