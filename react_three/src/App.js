import React, { useState } from 'react';
import './App.css';
import Body from './compont/body.js'
import Context from './compont/context.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Naverbar  from './compont/navebar.js';
import Clothes from './compont/clothes.js';
function App() {
  const [carditem,setcard]=useState([])
  const getquntityFromC=carditem.map((item)=> item.id)

  const getquntity=(id)=>{
    return carditem.find((item)=> item.id === id)?.quntity || 0
  }
  const total=carditem.reduce((item,qu)=>{
    return item + qu.quntity
  },0)

  const putItme=(id)=>{
      setcard((curntitem)=>{
          if(curntitem){
            return [...curntitem,{id,quntity: 1}]
          }else{
            return curntitem.map((item)=>{
              return {...item,quntity:item.quntity + 1}
            })
          }
      })
  }
  const plus=(id)=>{
      setcard((curntitem)=>{
          return curntitem.map((item)=>{
            if(item.id === id){
              return {...item,quntity:item.quntity + 1}
            }else{
              return item
            }
            })
      })
  }
  const mines=(id)=>{
    setcard((curntitem)=>{
     if(curntitem.find((item)=> item.id === id) === null) {
        return curntitem.filter((item)=> item.id !== id )
     }else{
        return curntitem.map((item)=>{
          if(item.id === id){
              return {...item,quntity:item.quntity - 1 }
          }else{
            return item
          }
        })
     }
    })
  }
  
 const remove=(id)=>{
  return setcard(carditem.filter((item)=> item.id !== id))
 }
  return (
    <div className="App" >
      <BrowserRouter>
      <Context.Provider value={{carditem,total,remove,getquntityFromC}}>
        <Naverbar/>
      </Context.Provider>
      

        <Routes>
          <Route path='' element={
               <Context.Provider value={{carditem,putItme,plus,total,mines,getquntity,remove}}>
               <Body />
              </Context.Provider>

          } />
          <Route path='/clothes' element={<Clothes />} />
        </Routes>
        
      </BrowserRouter>

     
    </div>
  );
}

export default App;
