import React, { useContext, useEffect, useId, useState } from 'react'
import Context from './context';
import data from './prodect.json'
function Profile({id,name,image}){
    const [change_button,set_button]=useState(0)
    const {putItme,plus,mines,carditem,total,getquntity,remove}=useContext(Context)
    const getq=getquntity(id)
    const iding =useId()
    const change=()=>{
        set_button(1)
    }
    // useEffect(()=>{
    //     window.addEventListener('click',(e)=>{
    //         console.log(e.target)
    //     })
    // })
    return (
            <div className='body' >
                <div className='card-item' >
                    <div className='div-image'>
                      <img src={image} />
                    </div>
                    <div className='div-name'>
                    <span>{name}</span>
                    </div>
                    
                   {getq === 0 ? <Dbutton /> :  <New_button />  } 
                </div>
            </div>
    );
    function Dbutton(){
        return  (
            <button type='button' onClick={()=> putItme(id) } className='but'>add</button>
        )
    }
    function New_button(){
        // const {putItme,plus,mines,carditem,total,getquntity}=useContext(Context)
        const rem= (iding)=>{
            if(getq >1){
                return mines(iding)
            }else{
                const dadd=data.find((item)=> item.id === iding)
                return remove(dadd.id)
            }
        }
        return(
            <div>
                <button type='button' className='rem-but same' onClick={()=> rem(id)}> - </button>
                        <span>{getq}</span>
                <button type='button' className='plus same' onClick={()=> plus(id) }> + </button>
            </div>
        )
    }
}

export default Profile;