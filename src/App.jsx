import { useState } from 'react'
import Header from './components/header'
import Cards from './components/cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bd-red-500'>
    <Header />  
    <Cards />

    </div>
    </>
  )
}

export default App
