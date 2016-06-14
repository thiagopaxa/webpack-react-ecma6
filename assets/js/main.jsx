import { createStore } from 'Redux'
import ReactDOM from 'react-dom'
import React from 'React'


const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return ++state;
    case 'DECREMENT':
      return --state;
    default:
      return state;
  }
};

//redux store
const store = createStore(counter);

// React Component
const Counter = ({
    value,
    onIncrement,
    onDecrement
  }) => (
    <div>
      <h1>{value}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  )

//render react component through redux store
const render = () => {
  ReactDOM.render(
    <Counter value={store.getState()}
      onIncrement={() => {
        store.dispatch({type: 'INCREMENT'})
      }}
      onDecrement={() => {
        store.dispatch({type: 'DECREMENT'})
      }}
    />,
    document.getElementById('reduxState')
  )
}

// render and subscribe for future dispatchers
store.subscribe(render);
render();