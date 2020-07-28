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
      color: "",
      isLogged: false
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.handleLog = this.handleLog.bind(this)
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

  componentDidMount() {
    setTimeout(() => {
        this.setState({
            isLoading: false
        })
    }, 1500)
}

  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count){
      const newColor = randomcolor()
      this.setState({color: newColor})
    }
  }

  handleLog(){
    this.setState(prevState => {
      return{
        isLogged: !prevState.isLogged
      }
    })
  }

  render() {
    let buttonText = this.state.isLogged? "Log Out" : "Log In"
    let disText = this.state.isLogged? "Logged in" : "Logged out"
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
          <hr/>
          <p align="center">
            <button onClick = {this.handleLog}>{buttonText}</button><br/>
            {disText}
          </p>
      </div>
    );
  }
}

export default App;
