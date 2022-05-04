import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './view/app/app';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./data/store";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={store}>

          <BrowserRouter>
              <App/>
          </BrowserRouter>

      </Provider>
);


reportWebVitals();
