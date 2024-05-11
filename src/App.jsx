
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Navigation/Header'
import Home from './page/home/Home'
import Contact from './page/Contact'
import About from './page/About'
import News from './page/News'



function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/news' element={<News/>}/>


    </Routes>
    </>
  )
}

export default App
