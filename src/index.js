import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { store, persistor } from 'redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import 'index.css'
import App from 'App'

ReactDOM.render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </PersistGate>
  </React.StrictMode>,
  document.getElementById('root')
)
