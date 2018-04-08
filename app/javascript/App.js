import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

import StockIndexContainer from './containers/StockIndexContainer'
import NavBar from './components/NavBar'

const App = props => {
  return(
    <div>
      <Router history={browserHistory}>
        <Route path='/' component={NavBar} >
          <IndexRoute component={StockIndexContainer}/>
        </Route>
      </Router>
    </div>
  )
}

export default App;
