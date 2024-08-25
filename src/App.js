import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavComponent from './NavBar/Nav/NavComponent';
import HomeComponent from './NavBar/Home/HomeComponent';
import PatternComponent from './NavBar/Pattern/PatternComponent';
import CategoryComponent from './NavBar/Category/CategoryComponent';
import ContactComponent from './NavBar/Contact/ContactComponent';
import SignUpComponent from './NavBar/SignUp/SignUpComponent';
import LoginComponent from './NavBar/Login/LoginComponent';
import PatternDetail from './NavBar/Pattern/PatternDetail';
import GuideComponent from './NavBar/Guide/GuideComponent';
import TutorialComponent from './NavBar/Tutorial/TutorialComponent';
import AddPattern from './NavBar/Pattern/AddPattern';
import TutorialDetail from './NavBar/Tutorial/TutorialDetail';


function App() {
  return (
    <Router>
      <NavComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/pattern" element={<PatternComponent />} />
        <Route path="/category" element={<CategoryComponent />} />
        
        <Route path="/guide" element={<GuideComponent />} />
        <Route path="/tutorial" element={<TutorialComponent />} />

        

        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/signup" element={<SignUpComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/add-pattern" element={<AddPattern />} />
        <Route path="/pattern/:id" element={<PatternDetail />} />
        <Route path="/" element={<TutorialComponent />} />
        <Route path="/tutorial/:id" element={<TutorialDetail/>} />



        

      </Routes>
    </Router>
  );
}

export default App;
