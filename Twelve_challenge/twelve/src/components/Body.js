import React , { useState } from "react";
import Profil from "./Profil";
import Right from "./Right";
import Default from "./Defult";
import userContext from "./userContext";
// import prodect from "./data";
import Shopping from "./userContext";
import data from './data.json'



export default function Body(){

   // let {item}=prodect;

    return (
      <div className="body">
      
           
         <Right column='4/6' rows='1/6'  />   

         {/* <Default  column='4/6' rows='1/6'/> */}

         {data.map((element)=>{

            return <Profil {...element} />
         })}
       
               
           
               
           
            
            
          
         {/* })} */}
      
      </div>     
    );
}