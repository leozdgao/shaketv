import React from 'react'
import { IndexRoute, Route } from 'react-router'
import { App, Series, Tvschedule, Famous } from './containers'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Series} />
    <Route path="schedule" component={Tvschedule}></Route>
    <Route path="famous" component={Famous}></Route>
  </Route>
)

// <Route path="*" component={Page404} />
