import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
// import App from './App';
import Header from './components/Header'
import Home from './pages/home'
import Character from './pages/character'
import Error from './pages/error'
import { SearchNameProvider } from './utils/context'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <SearchNameProvider>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/character" element={<Character />} />
                    <Route element={<Error />} />
                </Routes>
            </SearchNameProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
