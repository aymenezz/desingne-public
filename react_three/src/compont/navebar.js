import React, { useContext, useState } from 'react'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faCartShopping } from '@fortawesome/free-solid-svg-icons' 
import Shopping from './shopping_cart'
import Context from './context'
import Clothes from './clothes'

function Naverbar(){
    const {total,carditem,getquntityFromC}=useContext(Context)
    const [value,setvalue]=useState(false)
    console.log(`======${carditem.id}`)
    const switching=()=>{
        if(value===false){
            setvalue(true)
        }else if(value===true){
            setvalue(false)
        }
    }
    return (
        <>
            {value === true && <Shopping  />}
            <nav className='nav'>
            
            <NavLink to='/' >
            <div className='navLink'>home</div>
            </NavLink>

            
            <NavLink to='/clothes' >
            <div className='navLink'>clothes</div>
            </NavLink>
            
            
            <div className='div-icon'>
            <div className='total'>{getquntityFromC.length}</div>
            <FontAwesomeIcon icon={faCartShopping} size='2x' className='icon-one' onClick={switching}/>
            </div>
            
          {/* <FontAwesomeIcon icon={faUser} /> */}
                
            </nav>
            
        </> 

    );
}

export default Naverbar;