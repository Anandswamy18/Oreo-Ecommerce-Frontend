import { createStore, combineReducers } from 'redux';
import cartReducer from './reducer/cartReducer';


const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading state from localStorage:', err);
    return undefined;
  }
};


const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    console.error('Error saving state to localStorage:', err);
  }
};


const rootReducer = combineReducers({
  cart: cartReducer,
 
});


const persistedState = loadState();


const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Optional for Redux DevTools
);


store.subscribe(() => {
  saveState(store.getState());
});

export default store;
