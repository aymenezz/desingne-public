import { prettyFormat } from "@testing-library/react";
import React, { useContext, useEffect } from "react";
import { flushSync } from "react-dom";
// import prodect from "./data";
import data from './data.json'
import UserContext from "./userContext";

function Right(prop){

    const {cartitem,remove}=useContext(UserContext)

    // let dele=(index)=>{
    //     let filt=prop.getorder.filter((_,i)=> i !== index)
    //     prop.dele(filt)   
    //     // prop.swich(false)
    // }
    
        
        
    return (
        <div className="div-right">
                
                <div className="cart" style={{gridColumn:prop.column}}>
                <h1>hello</h1>
                <div className="mnue">
                    <ul>

                         {cartitem.map((item)=>{
                        if(item.quantity > 0){
                            const datatabes=data.find((i)=> i.id === item.id)
                            return <li>
                                {datatabes ? <><span>{datatabes.thename} </span> 
                                
                                <span>{datatabes.slarey * item.quantity}</span> 
                                
                                <button onClick={()=>remove(datatabes.id)}>remove</button>
                                </> : console.log('im sorry man')}
                                {/* {item.slarey} */}
                            </li>
                        }else{
                            console.log(item.quantity)
                        }

                         })} 
    
                    </ul>
                    
                </div>
            
            <button className="confirm" >confirm</button>
            </div>

            
        </div>
    )
}
export default Right;