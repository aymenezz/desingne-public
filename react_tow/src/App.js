import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, Link,useNavigate } from 'react-router-dom';
import Fahrenheit from './component/Fahrenheit';
import Body from './component/body';
import { getDefaultNormalizer } from '@testing-library/react';
  function App() {
  const [temp,setTemp]=useState('celsius')
  const [value, setvalue]=useState({})
  const [inpvalue,setnewvalue]=useState()
  const [location,setLocation]=useState([])
  const input_text=useRef()
  const apiKey = process.env.REACT_APP_lociton;
  const apiUrl=process.env.REACT_APP_API_member;
  const member=apiUrl
  const clickButton=()=>{
      setnewvalue(input_text.current.value)
      console.log(inpvalue)
  }
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((successCallback)=>{
      setLocation([successCallback.coords.latitude,successCallback.coords.longitude])
    })
  }
  const temperture=()=>{
    if(temp === 'celsius'){
      setTemp('fahrenheit')
    }else if(temp === 'fahrenheit'){
      setTemp('celsius')
    }
    
  }
  // function apifunc(){
  //   const fetching=fetch(`https://api.openweathermap.org/data/2.5/weather?q=cairo&units=imperial&APPID=7f513444b86c229057348573d317d93a`).then(response=> response.json())
  //   fetching.then((data)=> {setvalue({'temp':data['main']['temp'],'name':data['name']})}  )

  // }
  // apifunc
  // useEffect(()=>{
  //   const fetching=fetch(`https://api.openweathermap.org/data/2.5/weather?q=cairo&units=imperial&APPID=7f513444b86c229057348573d317d93a`).then(response=> response.json())
  //   fetching.then((data)=> {setvalue({'temp':data['main']['temp'],'name':data['name'],'country':data['sys']['country']})}  )
  // })

// console.log(getdata['PromiseResult'])
// console.log(typeof(getdata))
// console.log(value)
// console.log(getdata)

  // console.log(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&APPID=${member}`)
  // console.log(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&APPID=b12b83b99f96efc3e492bec819809729`)
  // console.log(apiUrl)
  return (
    
          <div>
            <form onSubmit={(e)=>e.preventDefault()}>
             <div className='div-input'>
                  <input type='text' className='inp-text' id='search ' placeholder=' ' ref={input_text}/>
                  <div className='cut'></div>
                  <label for='search' >search city</label>
                  <button type='button' className='but-find' onClick={clickButton}>find</button>
              </div>
              
            </form>
            <div className='swit-div'>
            <button type='button' className='but-switch' onClick={temperture}>{temp}</button>
            </div>
          
            {/* <BrowserRouter >
           <Link to='/OtherB' >otherB</Link>
           <Routes > 
           
             <Route path='/' element={<Body />} />
             <Route path='/OtherB' element={<OtherB />} />
             <Route path='*' element={<h1>not found</h1>} />
           </Routes>
           </BrowserRouter>  */}

           {temp === 'celsius' ?<Body input={inpvalue} loc={location}/>: temp ==='fahrenheit' ?<Fahrenheit input={inpvalue} loc={location} />: <h1>none</h1>  }
           
          </div>
          
  );
}
// function Buttons(){
//   const navigator=useNavigate()
//   return(
//     <>
//     <button onClick={()=>navigator('/body')} >body</button>
//     <button onClick={()=>navigator('/Otherbody')}>hello</button>
//     </>
//   )
// }

export default App;


