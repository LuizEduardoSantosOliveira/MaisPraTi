import '../styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/home'
import About from '../Pages/about'
import Services from '../Pages/Services'
import Contact from '../Pages/Contact'
import ProtectedRoute from '../Components/ProtectedRoute'
import Login from '../Components/login'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={ <About /> } />
          <Route path='/services' element={ 
          <ProtectedRoute>
            <Services />
          </ProtectedRoute> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/login' element={ <Login /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App