import React from 'react'
import counterReducer from './reducers/counterReducer';
import  {useState, useReducer} from 'react'


const Counter = () => {
    const [value, dispatch] = useReducer(counterReducer, 0)
  return (
    <div className='card'>
    <h3>Start: {value}</h3>

    <div className=''>
      <button className='btn btn-secondary ' onClick={() => dispatch({type: 'INCREMENT'})}>INCREMENT</button>
      <button className='btn btn-secondary ms-2' onClick={() => dispatch({type: 'RESET'})} >RESET</button>
    </div>
     
   </div>
  )
}

export default Counter
