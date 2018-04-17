import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './modules/NavBar';
import { SinglePostsDisplay } from './modules/SinglePostsDisplay';
import { PostsManager } from './modules/PostsManager';
import { Footer } from './modules/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>
          <NavBar linkAddress="https://www.google.com/" linkName="Google"/>
        </ul>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SinglePostsDisplay />
        <PostsManager />
        <div className="Clear Spacer"></div>
        <Footer />
      </div>
    );
  }
}

export default App;
