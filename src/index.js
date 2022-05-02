import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './view/app/app';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./data/store";

let obj ={
    b:1,
    b2:2,
    b3:3,
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={store}>
          <App obj={obj}/>
      </Provider>
);


reportWebVitals();
