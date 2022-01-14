import React from 'react'
import ReactDOM from 'react-dom'
// import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
// import App from './App';
import Header from './components/Header'
import Home from './pages/home'

ReactDOM.render(
    <React.StrictMode>
        {/* <Router>
      <Header />
    </Router> */}
        <Header />
        <Home />
        {/* <App/> */}
    </React.StrictMode>,
    document.getElementById('root')
)
