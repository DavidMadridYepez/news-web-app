import React from "react";
import Champions from './pages/champions'
import Home from './pages/home';
import News from './pages/news';
import Login from './pages/login'
import Signup from './pages/signup';
import Navbar from './components/navbar'
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="champions" element={<Champions />} />
        <Route path="news" element={<News />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;