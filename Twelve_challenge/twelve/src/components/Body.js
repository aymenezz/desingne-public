import React , { useContext, useState } from "react";
import Profil from "./Profil";
import Right from "./Right";
import Default from "./Defult";
// import userContext from "./userContext";
// // import prodect from "./data";
// import Shopping from "./userContext";
import data from './data.json'
import UserContext from "./userContext";



export default function Body(){
   const {cartitem,remove,swich}=useContext(UserContext)
    return (
      <div className="body">
      
      {cartitem.length > 0 ? <Right column='4/6' rows='1/6'  /> : <Default  column='4/6' rows='1/6'/> }

         {data.map((element)=>{

            return <Profil {...element} />
         })}
       
               
           
               
           
            
            
          
         {/* })} */}
      
      </div>     
    );
}