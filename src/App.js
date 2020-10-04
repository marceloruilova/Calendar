import React from 'react';
import logo from './logo.svg';
import Main from './components/MainComponent';
import './App.css';
//import {BrowserRouter} from 'react-router-dom';
//import {Provider} from 'react-redux';
//import { ConfigureStore } from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
