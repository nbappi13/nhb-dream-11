import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import 'font-awesome/css/font-awesome.min.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header></Header>
    </>
  )
}

export default App
