import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './style.css'
import ContactCard from './components/contact';

function App() {
  return (
    <div>
       <Header />
       <MainContent />
       <Footer /><br/><br/>
       <ContactCard contact = {{name: "Vikas Gupta", phone: "911"}}/>
       <ContactCard contact = {{name: "Bruce Wayne", phone: "100"}}/>
    </div>
  );
}

export default App;
