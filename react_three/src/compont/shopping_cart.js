import React, { useContext } from "react";
import Context  from "./context.js";
import data from './prodect.json'


function Shopping(){
    const {carditem,remove}=useContext(Context)
    // const {carditem}=useContext(Context)

    return (<div className="cart">
            
            <div className="overflow">
            {carditem.map((element)=>{
                if(element.quntity >= 1){
                    const datiles=data.find((item)=> item.id === element.id)
                    return (
                        
                        <li className="li-card">
                            <div >
                            <img src={datiles.image}  style={{width:'68px'}}/>
                            </div>
                            
                            {datiles.name}
                            <span>
                                <span>price=</span>
                            { datiles.price* element.quntity} $
                            </span>
                            <br></br>
                            <button onClick={()=> remove(datiles.id)}>remove</button>
                        </li>
                        
                    )
                }else{
                    const databases=data.find((item)=> item.id === element.id)
                    return remove(databases.id)
                }
            })
            }
            </div>
        </div>
      
        )    
}

export default Shopping ;