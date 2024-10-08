import React,{useState} from 'react';
import Body from './components/Body';
// import Shopping from './components/userContext';
import UserContext from './components/userContext'

function App() {
  const [swich ,setswich ]=useState(false)
  const [cartitem,setcartitem]=useState([])

  const reducequantity=cartitem.reduce(
    (quantity,item)=> item.quantity + quantity,0
        )
        
  

    const getquantity=(id)=>{
        return cartitem.find((item)=>item.id === id)?.quantity || 0
    }
const increase =(id)=>{
    setswich(true)
    setcartitem((currentitem)=>{
        
        if(currentitem){
            return [...currentitem,{ id,quantity: 1 }]
        }else{
            return currentitem.map((item)=>{
                // if(item.id=== id){
                    return {...item,quantity: item.quantity + 1}
                // }else{
                //     return item
                // }
            })
        }
        
    
    })
}


const plus=(id)=>{
    
    setcartitem((currentitem)=>{
       return currentitem.map((item)=>{
        if(item.id=== id){
            return {...item,quantity:item.quantity + 1}
        }else{
            return item
        }
        
       })

       
        
    })
}

    // const increase=(id)=>{
        
    //     setcartitem((currentitem)=>{
    //         if(currentitem.find((item)=> item.id == id )){
                
    //             return [...currentitem,{id,quantity: 1}]
    //         }else{
    //             return currentitem.map((item)=>{
    //                 if(item.id === id){
    //                     return {...item,quantity: item.quantity + 1}
    //                 }else{
    //                     return item
    //                 }
    //             })
    //         }
    //     })
    // }

    // const decreas=(id)=>{
    //     setcartitem((currentitem)=>{

    //        return currentitem.filter((item)=>{
    //         if(item.id=== id){

    //             return {...item,quantity:item.quantity -1}
    //         }else{
    //             return item
    //         }
            
    //        })
    
           
            
    //     })
    // }


    const decreas=(id)=>{
        setcartitem((currentitem)=>{
            if(currentitem.find((item)=> item.id === id ) === null){
                return currentitem.filter((item)=> item.id !== id);
            }else{
                return currentitem.map((item)=>{
                    if(item.id === id){
                        return {...item,quantity:item.quantity - 1 }
                    }else{
                        return item
                    }
                })
            }
        })
    }


    const remove=(id)=>{
        setcartitem((currentitem)=> currentitem.filter((item)=> item.id !== id))
    }
    
  return (
    <div>
    
        <UserContext.Provider value={{cartitem,getquantity,increase,decreas,remove,plus,swich,setswich,reducequantity}}>
          <Body />
        </UserContext.Provider>
    

    </div>
  );
}

export default App;
