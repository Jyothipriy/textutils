import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() =>{
      setAlert(null)
    }, 2000)
  }

  const toggleMode =() =>{
    if(mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor = '#040c4d';
      showAlert('Dark mode enabled', 'success');
      // document.title = 'TextUtils - Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled', 'success')
      // document.title = 'TextUtils - Light Mode'
      // setInterval(() =>{
      //   document.title = 'TextUtils - Light Mode Enabled'
      // }, 2000)
      // setInterval(() =>{
      //   document.title = 'TextUtils - this is newly created app'
      // }, 3000)
    }
  }
  
  return (
    <>
    <HashRouter>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Routes>
      <Route path = '/' element ={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert = {showAlert}/>}/>
      <Route path = '/textutils' element ={<TextForm heading="TextUtils - Word Counter | Character Counter | Text manipulation" mode={mode} showAlert = {showAlert}/>}/>
      <Route path='/about' element={<About mode ={mode}/>}/>      
    </Routes>
    </HashRouter>
    </>
  );
}

export default App;
