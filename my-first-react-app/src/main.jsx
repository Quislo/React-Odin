import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import Packed from './Packed.jsx'
import TodoList from './Chaves.jsx'
import Estados from './Estados.jsx'
import React from "react";
import Pessoa from './Pessoa.jsx'
import Values from './Valore.jsx'
import Gallery from './Estados2.jsx'
import CustomInput from './Valore.jsx'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Pessoa/>
    <CustomInput/>
  </React.StrictMode>,
)
