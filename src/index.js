import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import ParentComponent from './components/Parent'
import { Provider } from 'react-redux'
import store from './store'
import { emitter, emitterKeys } from './emitterKeys'

(() => {
  emitter.on(emitterKeys.ON_SET_TITLE, (dt) => {
    console.info('Global Event was fired', dt)
    store.dispatch({ type: emitterKeys.ON_SET_TITLE, payload: { title: dt.title } })
  })
})()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ParentComponent />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
