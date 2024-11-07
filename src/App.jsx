import { useState } from 'react'
import Header from './Componet/Header'
import Main from './Componet/Main'
import Footer from './Componet/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
        <Main/>
        <Footer/>

      </div>
      
    </>
  )
}

export default App
