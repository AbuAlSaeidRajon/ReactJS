// first two lines are always import files 
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'

const Box = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Title: {props.title}</p>
      <p>Age: {props.age}</p>
    </div>
  );
  };

//JS begins (Arrow function).............
const name = "Md Abu Al Saeid"
const first_page = 2022;

const Demo = () => {
  return (
  // capital D means we are creating components not variables.....
  <div>
    <h1>Hello! My name is {name}</h1>
    <p>I have {2024 - first_page} years of building websites experience.</p>
    <Box name="Md Abu Al Saeid" title="Student" age="25"/>
    <Box name="Karin" title="Student" age="25"/>
    <Box name="Jake" title="Student" age="25"/>
  </div>
  );
};

/* const demo = (
  <div>
    <h1>Hello! My name is {name}</h1>
    <p>I have {2024 - first_page} years of building websites experience.</p>
  </div>
  ); */

ReactDOM.createRoot(document.getElementById('root')).render(
  // getElementById and render means single page application.........
  <React.StrictMode>
    <Demo/>
  </React.StrictMode>
);
