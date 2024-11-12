import './App.css'
import {ThemeProvider}  from './components/ThemeContext'
import ThemeSwitcher from './components/themeSwitcher'

function App() {
  return (
    <>
      
        <h1>Exemplo de Tema com useContext</h1>
        <ThemeSwitcher/>
    </>
  )
}

export default App