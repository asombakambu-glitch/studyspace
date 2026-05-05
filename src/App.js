import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';



import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Blog from './pages/Blog';
import Dashboard from './pages/Dashboard';
import Donations from './pages/Donations';
import Login from './pages/Login';
import Notes from './pages/Notes';
import Profile from './pages/Profile';
import Relaxation from './pages/Relaxation';
import StartSession from './pages/StartSession';







function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header" style={{ backgroundColor: "" }}>
          <h1 className='text-dark'>Study Space</h1>
          <p className='text-dark p-4'>Your academics and mental health safe space</p>
        </header>
        <nav>
          <Link to="/signup" className='btn btn-outline m-1 ' >Sign Up</Link>
          <Link to="/signin" className='btn btn-outline m-1 '>Sign in</Link>
          <Link to="/blog" className='btn btn-outline m-1 '>Blog</Link>
          <Link to="/dashboard" className='btn btn-outline m-1 '>Dashboard</Link>
          <Link to="/donations" className='btn btn-outline m-1 '>Donations</Link>
          <Link to="/login" className='btn btn-outline m-1 '>Login</Link>
          <Link to="/notes" className='btn btn-outline m-1 '>Notes</Link>
          <Link to="/profile" className='btn btn-outline m-1 '>Profile</Link>
          <Link to="/relaxation" className='btn btn-outline m-1 '>Relaxation</Link>
          <Link to="/startsession" className='btn btn-outline m-1 '>StartSession</Link>



          







        </nav>

        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/donations' element={<Donations/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/notes' element={<Notes/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/relaxation' element={<Relaxation />} />
          <Route path='/startsession' element={<StartSession />} />


         
        </Routes>



      </div>
    </BrowserRouter>
  );
}

export default App;
