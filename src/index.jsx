import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import createStore from './redux/createStore'
import { App } from './containers'
import routes from './routes'
import './sass/index.scss'

const store = createStore()
const root = (
  <Provider store={store} key="provider">
    <Router history={browserHistory} routes={routes} />
  </Provider>
)

ReactDOM.render(root, document.getElementById('app'))
