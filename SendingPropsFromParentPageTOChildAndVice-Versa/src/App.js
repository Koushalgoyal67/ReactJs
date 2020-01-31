import React from 'react';
import Page1 from './Component/Page1';
import Page2 from './Component/Page2';
import { createBrowserHistory} from 'history';
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom'

var history = createBrowserHistory()
function App() {
  return (
    <div className="App container-fluid">
        <Router>
          <Switch>
                <Route exact path='/' component={(props)=>(<Page1 {...props} ></Page1>)}/>
                <Route  path='/page1' component={(props)=>(<Page1 {...props} ></Page1>)}/>
                <Route  path='/page2' component={(props)=>(<Page2 {...props} ></Page2>)}/>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
