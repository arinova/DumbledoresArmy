'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import { selectLevel } from 'APP/app/reducers/level';

import store from './store'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import Home from './components/Home'
import LevelContainer from './containers/LevelContainer'

const Navigation = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      {children}
    </div>
)


export const onLevelEnter = nextState => {
  console.log("params",nextState.params.num)
  store.dispatch(selectLevel(nextState.params.num));
};



render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Navigation}>
        <IndexRedirect to="/home" />
          <Route path="/home" component={Home}/>
        <Route path="/level/:num" component={LevelContainer} onEnter={onLevelEnter} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
