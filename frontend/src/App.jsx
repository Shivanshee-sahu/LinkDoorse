import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Influencer from './Influencer';
import Error from './Error';
import Brand from './Brand';
import Contact from './Contact';
import Login from './Login';
import Phone from './Phone';
import ContactProfile from './ContactProfile';
import Pay from './Pay';
import TermsAndConditions from './Terms';
import Landing from './Landing';
function App() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/phone" element={<Phone />} />
      <Route path='*' element={<Error/>}/>
      <Route path='/brand' element={<Brand/>}/>
      <Route path='/pay' element={<Pay/>}/>
      <Route path='/term' element={<TermsAndConditions/>}/>
      <Route path='/influencer' element={<Influencer/>}/>
      <Route path='/Landing' element={<Landing/>}/>

      <Route path='/profile' element={<ContactProfile/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  );
}

export default App;
