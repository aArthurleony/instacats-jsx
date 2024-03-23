import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Main from './Main/Main'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Main></Main>
    <Footer />
  </React.StrictMode>,
)
//seguindo a ordem logica, começando por header e por ultimo o footer