import React, { useCallback, useContext, useRef, useState } from "react";
import userContext from "./userContext";
import { useCart } from "react-use-cart";
import { flushSync } from "react-dom";
// import prodect from "./data";
import UserContext from "./userContext";
import { queries } from "@testing-library/react";
// import Navbar from "./Navbar";

function Profil({id,column,rows,image,thename,discrption,slarey}){
        const {cartitem,getquantity,increase,plus,decreas}=useContext(UserContext)

        const quantity=getquantity(id);
       
        
        return (
            <>
            

            
            
            <div className="card" style={{gridColumn:column,gridRow:rows}} >
            
            <div className="card-item" >
                <img src={image}/>
               {quantity === 0 ? <Button_one />: <Button_tow /> }
              
                    
            </div>
            <div className="string">
                <span>{thename}</span>
                <span>{discrption}</span>
                <span className="slarey">{slarey}</span>
            </div>
            </div>
            
        
       
        </>
    )
function Button_one(){
    return (
        
    <button id="basic"   className='order' onClick={()=> increase(id)} >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
        Add to Cart
        </button>
    )
}
function Button_tow(){
    return (
        <div className="other" ><button className="cyrcle" onClick={()=>decreas(id)} >-</button> {quantity} <button className="cyrcle"  onClick={()=>plus(id)}>+</button></div> 
    )
}


    }
            

        

export default Profil 