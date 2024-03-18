import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const name = "Md Abu Al Saeid"
const first_page = 2022;

const demo = (
  <div>
    <h1>Hello! My name is {name}</h1>
    <p>I have {2024 - first_page} years of building websites experience.</p>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {demo} </React.StrictMode>,
)
