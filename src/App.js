import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Payment from './components/Payment'
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard';
import Notes from './pages/Notes';
import GetNotes from './pages/GetNotes';
import Blog from './pages/Blog';
import Profile from './pages/Profile';
import Relaxation from './pages/Relaxation';
import StartSession from './pages/StartSession';
import Donations from './pages/Donations';
import GetBlogs from './pages/GetBlogs';
import Footer from './components/Footer';
import Cart from './pages/Cart'
import Community from './pages/Community';


function App() {
  return (

    <BrowserRouter>

      {/* Navbar here */}
      <Navbar />

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/signin" element={<Signin />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/notes" element={<Notes />} />

        <Route path="/getnotes" element={<GetNotes />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/relaxation" element={<Relaxation />} />

        <Route path="/startsession" element={<StartSession />} />

        <Route path="/payment" element={<Payment />} />

        <Route path="/donations" element={<Donations />} />

        <Route path="/blogs" element={<GetBlogs />} /> 

        <Route path="/cart" element={<Cart />} />

        <Route path="/community" element={<Community />} />

        
      </Routes>

      <Footer/>

    </BrowserRouter>

  

  );
}

export default App;