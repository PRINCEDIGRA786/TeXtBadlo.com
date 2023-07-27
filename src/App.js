
import './App.css';
import Navbar from './Compo/Navbar';
import Form from './Compo/Form';
import { useState } from 'react';
import Cart from './Compo/Cart'
import Alert from './co/Alert';
import Notestate from './context/Notestate'

// import{
//   Routes,
//   Route,
//   BrowserRouter
// } from "react-router-dom";
function App() {

  const [mode, setMode] = useState('light');//Whether dark mode is enabled or not
  const [alert, setalert] = useState(null)
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setalert(null)
    }, 1000);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#222232'
      showAlert("Dark Mode has been enabled....", 'success')
      document.title = 'utility-Dark Mode'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled....", 'success')
      document.title = 'utility-Light Mode'
    }
  }
  const rogglemode = () => {
    if (mode === 'light') {
      setMode('red')
      document.body.style.backgroundColor = 'red'
      showAlert("Redish Mode has been enabled....", 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled....", 'success')
    }
  }
  const bogglemode = () => {
    if (mode === 'light') {
      setMode('blue')
      document.body.style.backgroundColor = 'blue'
      showAlert(" Bluish Mode has been enabled....", 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled....", 'success')
    }
  }
  return (
    <>
      <Notestate>
        <Navbar title='TExtBadlo.com' mode={mode} togglemode={togglemode} bogglemode={bogglemode} rogglemode={rogglemode}></Navbar>
        <Alert alert={alert} showAlert={showAlert} mode={mode}></Alert>
        <Form heading="Try Your Own TExt!" mode={mode} showAlert={showAlert} alert={alert} togglemode={togglemode}></Form>
        <Cart></Cart>
      </Notestate>
    </>
  );
}
{/* <BrowserRouter>
    <div className='container my-3'>
    <Routes>
     
      <Route path='/i' element={<Form/>}/>
      <Route path='/blog' element={<Navbar/>}/>
        {/* <Form heading="Enter example Prince" mode={mode}  showAlert={showAlert} alert={alert} togglemode={togglemode}/> */}
{/* </Routes> */ }
// </div>
// </BrowserRouter>

// this is props basically
export default App;
