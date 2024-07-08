import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Containers/Home/index.jsx'
import GlobalStyles from './Styles/globalStyle.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <GlobalStyles />
  </React.StrictMode>,
)
