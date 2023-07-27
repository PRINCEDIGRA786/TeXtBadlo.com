import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../State/index';
import { useSelector } from 'react-redux/es/hooks/useSelector';
// import { useContext } from 'react';
// import Notecontext from '../context/Notecontext';
export default function Cart() {
  const myState=useSelector(state=>state.amount)
  const ca=useSelector(state=>state.cart)
  console.log(ca)
  console.log(myState)
  const dispatch=useDispatch()
  // const a=useContext(Notecontext)
  const actions=bindActionCreators(actionCreators,dispatch)
  // const[first,setfirst]=useState()
  // useEffect(()=>{
  //   a.update()
  //   // eslint-disable-next-line
  // },[])
  return (
    
    // <div className='text-center'>
    //   <button onClick={()=>{dispatch(actionCreators.withdrawMoney())}} className='mx-2 bg-green-300'>-</button>
    //   {myState}
    //   <button onClick={()=>{dispatch(actionCreators.depositmoney())}} className='mx-2 bg-green-300'>+</button>
    // </div>
      <>
    <div className='text-center'>
      {/* <h1>{a.state.name} and {a.state.dost}</h1> */}
      <button onClick={()=>{actions.withdrawMoney()}} className='mx-2 bg-green-300'>-</button>
      {myState}
      <button onClick={()=>{actions.depositmoney()}} className='mx-2 bg-green-300'>+</button>
    </div>
    <div>
      <button onClick={()=>{actions.addtoCart(100)}}>This is for ad to cart 1</button>
    </div>
    <div>
      <button onClick={()=>{actions.addtoCart(200)}}>This is for ad to cart 2</button>
    </div>

    {/* <div className='text-center my-5'>
      <button onClick={()=>{a.update(1)}}>Click this 1</button>
    </div>
     <div className='text-center my-1'>
      <button onClick={()=>{a.update(2)}}>Click this 2</button>
    </div> 
    <div>The value is:{
      }</div> 
    {/* <div>
      The value is:{a.val}
    </div> */} 
    </>
  )
}
