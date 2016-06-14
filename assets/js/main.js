import { createStore } from 'Redux'

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

const store = createStore(counter);

const render = () => {
  document.getElementById('reduxState').innerText = store.getState();
}

store.subscribe(render);
render();

document.getElementById('add').addEventListener('click',() => {
  store.dispatch({type: 'INCREMENT'})
} ,false)

document.getElementById('remove').addEventListener('click',() => {
  store.dispatch({type: 'DECREMENT'})
} ,false)
