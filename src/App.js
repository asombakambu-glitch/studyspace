import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';



import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin'



function App() {
  return (
   <BrowserRouter>
      <div className="App">
        <header className="App-header" style={{backgroundColor: ""}}>
          <h1 className='text-dark'>Study Space</h1>
          <p className='text-dark p-4'>Your academics and mental health safe space</p>
        </header>
        <nav>
        <Link to="/signup" className='btn btn-outline m-1 ' >Sign Up</Link> 
        <Link to="/signin" className='btn btn-outline m-1 '>Sign in</Link> 
        



       
        
      </nav>

      <Routes>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<Signin/>} />
        
      </Routes>
      


      </div>
    </BrowserRouter>
  );
}

export default App;
