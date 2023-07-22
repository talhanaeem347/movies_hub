import { useState } from 'react'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bd-red-500'>
    <Header />  

    </div>
    </>
  )
}

export default App
