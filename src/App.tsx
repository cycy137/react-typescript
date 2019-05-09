import React from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import Index from './Container/TopContainer';
import thunk from 'redux-thunk';
import appreducer from './reducer/appreducer';


const store=createStore(appreducer, applyMiddleware(thunk));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
          <Index></Index>

      </div>
    </Provider>
  );
}

export default App;
