import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Features from '../components/Features/Features'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Features />
        <Footer/>
      </div>
    );
  }
}

export default App;
