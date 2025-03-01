import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import BlogBody from './components/BlogBody';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Profile from './components/Profile';
import BlogPosts from './components/BlogPosts';
function App() {
  return (
    <div className="Karate Blogs">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<BlogBody/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/blog-posts" element={<BlogPosts/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;