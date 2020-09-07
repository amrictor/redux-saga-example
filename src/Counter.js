/*eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'

import { increment, decrement, incrementAsync } from './actions'

import loading from './assets/loading.png'
import './assets/styles.scss'


const selectCounter = createSelector(
  state => state.get('counter'),
  substate => substate.toJS()
)

const Counter = (props) => {
  const dispatch = useDispatch();
  const { value, incrementingAsynchronously: isLoading } = useSelector(selectCounter)

  return (
    <div>
      <button onClick={()=>dispatch(incrementAsync())} disabled={isLoading}>
        Increment after 1 second {isLoading && <img className="loading" src={loading} height='10px' alt="Loading..."/>}
      </button>
      {' '}
      <button onClick={()=>dispatch(increment())}>
        Increment
      </button>
      {' '}
      <button onClick={()=>dispatch(decrement())}>
        Decrement
      </button>
      <hr />
      <div>
        Clicked: {value} times
      </div>
    </div>
  )
}

export default Counter;
