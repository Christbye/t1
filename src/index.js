// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';


import createBrowserHistory from 'history/createBrowserHistory';



import './index.css';

const history = createBrowserHistory();

ReactDOM.render(

   <Router history={history} >
       <div>
       <Route  path="/" exact component={App}/>
       <Route path="/about" component={About}/>
       <Route path="*" component={NotFound}/>
       </div>
   </Router>,
    document.getElementById('root')
);