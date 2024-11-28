import userEvent from "@testing-library/user-event";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, Link,useNavigate } from 'react-router-dom';

import { sliceDate,getDay } from "./infor.js";
function Body(porp){
    const [style,setStyle]=useState({})
    const [value, setvalue]=useState({})
    const [descri,setdescrip]=useState('cloudy')
    const date=new Date()
    const getDivBack=useRef()
    const saveValue= value['description']
    useMemo(()=>{
        const asyn=async ()=>{
        const fetching=fetch(`https://api.weatherapi.com/v1/current.json?key=0757d265ad8c44fab3a195525242311&q=${porp.input || 'cairo' || porp.loc}`)
        fetching.then((data)=>data.json()).then((getvalue)=> setvalue({
            'temp':getvalue['current']['temp_c'],
            'name':getvalue['location']['name'],
            'description':getvalue['current']['condition']["text"].toLowerCase(),
            'date':getvalue['location']['localtime'],
            'country':getvalue['location']['country'],
            'icon':getvalue['current']['condition']['icon']
        }))
        
        
    }
    asyn()
    
    },[porp.input])
    useEffect(()=>{
       try{
            console.log(saveValue.includes('cloudy'))
            saveValue.includes('cl') === true && setStyle({'backgroundImage':'url("/weatherP/cloudy.png")'}) 
            saveValue.includes('ra') === true && setStyle({'backgroundImage':'url("/weatherP/rainy-day.png")'}) 
            saveValue.includes('ho') === true && setStyle({'backgroundImage':'url("/weatherP/hot.png")'}) 
            saveValue.includes('hea') === true && setStyle({'backgroundImage':'url("/weatherP/heavy.png")'}) 
            saveValue.includes('sn') === true && setStyle({'backgroundImage':'url("/weatherP/snow.png")'}) 
            saveValue.includes('sun') === true && setStyle({'backgroundImage':'url("/weatherP/sun.png")'})    
       }catch{
            console.log('none')
       }
        
    },[value])
    // useEffect(()=>{
    //     setdescrip(value['description'])
    //     console.log(descri.includes('cloudy'))
    // //    await saveValue.match(/(cloudy)/)[0]==='cloudy'? setStyle({'backgroundImage':'url("/weatherP/rainy-day.png")'}) : console.log('hello')


    // },[descri])

    
    return (
        <div className="body">
            
          
            <div className="card-weather">
                
                <div className="seasone" style={style} ref={getDivBack}></div>

                <div className="div-info">

                <div className="small-div">
                <span>tempture</span> 
                <span>{(Math.ceil(value['temp']))}°C</span>
                </div>

                <div className="small-div" >
                    <span> name city</span>
                    <span >{value['name']}</span>   
                </div>
                <div className="small-div">

                <span>description</span>
                <span>{value['description']} </span>

                </div>

                <div className="small-div">
                <span>day:{date.getDate()}</span>
                <span>{getDay(date.getDay())}</span>
                </div>
                <div className="small-div country">
                    <span>{value['country']}</span>
                </div>
                {/* Math.ceil((value['temp']-32)/ 1.8) */}
                {/* <h1>tempture:{(Math.ceil(value['temp']))}°C</h1>  */}
                
                
                
                {/* <h4>Time:{sliceDate(value['date'])}</h4> */}
                
                {/* <h4>{fulldate}</h4> */}

                </div>
           
                </div>
        </div>
    )
}

export default Body