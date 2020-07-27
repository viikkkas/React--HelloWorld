import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './style.css'
import ContactCard from './components/contact';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count:0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
      return{
        count: prevState.count + 1
      }
    }) 
  }

  render() {
    return (
      <div>
          <Header />
          <MainContent />
          <Footer /><br/><br/>
          <ContactCard contact = {{name: "Vikas Gupta", phone: "911"}}/>
          <ContactCard contact = {{name: "Bruce Wayne", phone: "100"}}/>
          <hr/>
          <p align="center"><h1>{this.state.count}</h1>
          <button onClick = {this.handleClick}>Change!</button></p>
      </div>
    );
  }
}

export default App;
