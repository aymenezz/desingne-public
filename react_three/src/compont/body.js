import React from 'react'
import data from './prodect.json' 
import Profile from './profile'
import Naverbar from './navebar'
import Clothes from './clothes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function Body(){
    return (
        <>
            {data.map((item)=>{
                return <Profile {...item}/>
            })}
        </>
    )
}

export default Body;