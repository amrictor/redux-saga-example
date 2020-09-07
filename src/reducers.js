import { fromJS } from 'immutable';

const initialState = fromJS({
  counter: {
    value : 0,
    incrementingAsynchronously: false
  }
});

export default function counter(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state.setIn(['counter', 'value'], state.getIn(['counter', 'value']) + 1)
    case 'DECREMENT':
      return state.setIn(['counter', 'value'], state.getIn(['counter', 'value']) - 1)
    case 'INCREMENT_ASYNC':
      return state.setIn(['counter', 'incrementingAsynchronously'], true)
    case 'INCREMENT_ASYNC_SUCCESS':
      return state.setIn(['counter', 'incrementingAsynchronously'], false)
    default:
      return state
  }
}
