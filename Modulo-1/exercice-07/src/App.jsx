
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Ex1 from "../pages/Exercice-01"
import Ex2 from "../pages/Exercice-02"
import Ex3 from "../pages/Exercice-03"
import Ex4 from "../pages/Exercice-04"
import Ex5 from "../pages/Exercice-05"
import Ex6 from "../pages/Exercice-06"
import Ex7 from "../pages/Exercice-07"
import Ex8 from "../pages/Exercice-08"
import Ex9 from "../pages/Exercice-09"
import Ex10 from "../pages/Exercice-10"




function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Ex1 />} />
            <Route path='/exercice-01' element={<Ex1 />} />
            <Route path='/exercice-02' element={<Ex2 />} />
            <Route path='/exercice-03' element={<Ex3 />}/>
            <Route path='/exercice-04' element={<Ex4 />} />
            <Route path='/exercice-05' element={<Ex5 />} />
            <Route path='/exercice-06' element={<Ex6 />} />
            <Route path='/exercice-07' element={<Ex7 />} />
            <Route path='/exercice-08' element={<Ex8 />} />
            <Route path='/exercice-09' element={<Ex9 />} />
            <Route path='/exercice-10' element={<Ex10 />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
