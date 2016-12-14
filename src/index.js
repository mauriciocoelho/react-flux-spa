import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { Router, Route, IndexRoute } from 'react-router';
import Archives from './pages/Archives';
import Featured from './pages/Featured';
import Settings from './pages/Settings';
import BrowserHistory from 'react-router/lib/browserHistory';

ReactDOM.render(  
  <Router history={BrowserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Featured}/>
      <Route path="archives(/:article)" component={Archives}></Route>
      <Route path="settings" component={Settings}></Route>      
    </Route>
  </Router>,
  document.getElementById('root')
);
