import { prettyFormat } from "@testing-library/react";
import React, { useContext, useEffect } from "react";
import { flushSync } from "react-dom";
// import prodect from "./data";
import Default from "./Defult";

import data from './data.json'
import UserContext from "./userContext";

function Right(prop){

    const {cartitem,remove,reducequantity}=useContext(UserContext)

    // let dele=(index)=>{
    //     let filt=prop.getorder.filter((_,i)=> i !== index)
    //     prop.dele(filt)   
    //     // prop.swich(false)
    // // }
    // function qunant(){
    //     const redu=cartitem.reduce((quantity,item)=>{
    //        return quantity
    //     })
    //     console.log(redu)
    // }
        
        
    return (
        <div className="div-right">
                
                <div className="cart" style={{gridColumn:prop.column}}>
                <h1>your cart({reducequantity})</h1>
                <div className="mnue">
                    <ul>

                         {cartitem.map((item)=>{
                        if(item.quantity >= 1){
                            const datatabes = data.find((i)=> i.id === item.id)
                            return <li>
                                {datatabes ? <><span>{datatabes.discrption} </span> 
                                
                                <span className="span-element">
                                    <span className="span-element">{item.quantity}x</span>
                                    <span className="span-element exs"><span className="span-element hash">@</span> ${datatabes.slarey}</span> 
                                    <span className="span-element"> ${datatabes.slarey * item.quantity}</span> </span> 
                                
                                <button className="removed" onClick={()=>remove(datatabes.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
                                </button>
                                </> : console.log('im sorry man')}
                                {/* {item.slarey} */}
                            </li>

                        }else{
                        const datatabes = data.find((i)=> i.id === item.id)
                        
                         return  remove(datatabes.id )
                         
                        }

                         })} 
    
                    </ul>
                    <div className="order-total">
                        <h3 style={{margin:'0px',opacity:0.5}}>order Total</h3>
                        <h1 style={{margin:'0px',color:'black'}}>
                        {
                        cartitem.reduce((totle,cartitem)=>{
                            const item =data.find((i)=> i.id === cartitem.id);
                            return totle + (item?.slarey || 0) * cartitem.quantity
                        },0)
                       }

                        </h1>
                       
                    </div>
                </div>
            
            <button className="confirm" >confirm</button>
            </div>

            
        </div>
    )
}
export default Right;