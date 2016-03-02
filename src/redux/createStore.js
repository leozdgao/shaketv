import { createStore as _createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './modules/reducer'
import env from '../../config/env'
// import createMiddleware from './middleware/clientMiddleware'
// import { syncHistory } from 'react-router-redux'

export default function createStore(data) {
  // Sync dispatched route actions to the history
  // const reduxRouterMiddleware = syncHistory(history)

  // const middleware = [createMiddleware(client), reduxRouterMiddleware]
  const middleware = []

  let finalCreateStore
  if (env.isDev) {
    // const { persistState } = require('redux-devtools')
    // const DevTools = require('../containers/DevTools/DevTools')
    finalCreateStore = compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : null,
      // persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(_createStore)
  } else {
    finalCreateStore = applyMiddleware(...middleware)(_createStore)
  }

  const store = finalCreateStore(rootReducer, data)

  // reduxRouterMiddleware.listenForReplays(store)

  if (env.isDev && module.hot) {
    module.hot.accept('./modules/reducer', () => {
      store.replaceReducer(require('./modules/reducer'))
    })
  }

  return store
}
