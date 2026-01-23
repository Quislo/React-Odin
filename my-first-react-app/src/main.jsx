import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import Packed from './Packed.jsx'
import TodoList from './Chaves.jsx'
import Estados from './Estados.jsx'
import React from "react";
import Person from './Person.jsx'
import CustomInput from './CustomInput.jsx'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Estados/>
    <Person/>
    <CustomInput/>
  </React.StrictMode>,
)
