import React from 'react'
import ReactDOM from 'react-dom/client'
// first two lines are always import files 

import App from './App.jsx'
import './index.css'

//JS bigins (Arrow function).............
const name = "Md Abu Al Saeid"
const first_page = 2022;

const Demo = () => {
  return (
  // capital D means we are creating components not variables
  <div>
    <h1>Hello! My name is {name}</h1>
    <p>I have {2024 - first_page} years of building websites experience.</p>
  </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Demo/>
    </React.StrictMode>,
)
