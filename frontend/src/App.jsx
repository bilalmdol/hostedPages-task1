import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import SignUp from './components/SignUp';
import Login from './components/Login';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* routing for signup page */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
