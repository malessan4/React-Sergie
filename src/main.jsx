import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import {ContadorApp} from './ContadorApp'
import { ListadoApp } from './ListadoApp'
import { AgregarTarea } from './components/AgregarTarea'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ListadoApp/>
  </React.StrictMode>,
)
