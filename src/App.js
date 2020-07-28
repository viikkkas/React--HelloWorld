import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './style.css'
import ContactCard from './components/contact';
import randomcolor from 'randomcolor'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count:0,
      color: ""
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    this.setState(prevState => {
      return{
        count: prevState.count + 1
      }
    }) 
  }
  
  decrement() {
    this.setState(prevState => {
      return{
        count: prevState.count - 1
      }
    }) 
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count){
      const newColor = randomcolor()
      this.setState({color: newColor})
    }
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
          <p align="center"><h1 style={{color: this.state.color}}>{this.state.count}</h1>
          <button onClick = {this.increment}>Increment</button><br/>
          <button onClick = {this.decrement}>Decrement</button></p>
      </div>
    );
  }
}

export default App;
