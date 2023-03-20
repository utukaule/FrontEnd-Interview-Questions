import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from './actions/index'

  const App = () => {
  const myState = useSelector((state) => state.changeNumber)
  const dispatch = useDispatch()
  return (
    <>
      <div className='container'>

        <h1>Counter</h1>
        <p>Usign react redux</p>
        <div className='inner'>
          <a href='#' className='minus' title='decrement'><span>-</span></a>
          <input name='total' type='text' className='show' value={myState} />
          <a href='#' className='plus' title='increment' onClick={() => dispatch(incNumber())} ><span>+</span></a>
        </div>

      </div>
    </>
  )
}

export default App;