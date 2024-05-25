import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Navigation/Header";
import Home from "./page/home/Home";
import Contact from "./page/Contact";
import About from "./page/About";
import News from "./page/News";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDataUser } from "./redux/actions/userAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataUser());
  }, []); //{type, payload}

  return (
    <>
      <Header />
      {/* <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/news' element={<News/>}/>


    </Routes> */}
    </>
  );
}

export default App;
