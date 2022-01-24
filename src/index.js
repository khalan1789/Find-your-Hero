import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
// import App from './App';
import Header from './components/Header'
import Home from './pages/home'
import Character from './pages/character'
import Error from './pages/error'
import About from './pages/about'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/character" element={<Character />} />
                <Route path="/about/" element={<About />} />
                <Route element={<Error />} />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
