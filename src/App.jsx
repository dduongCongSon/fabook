
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Navigation/Header'
import Hello from './components/Hello'




function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path='/videos' element={<Hello/>}/>
    </Routes>
    </>
  )
}

export default App
