import Header from './components/header'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import AddMovie from './pages/addMovie'

function App() {
  
  return (
    <>
    <div className='bd-red-500'>
    <Header />  
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/add-movie' element={<AddMovie />} />
    </Routes>

    </div>
    </>
  )
}

export default App
