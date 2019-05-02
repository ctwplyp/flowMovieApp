import React from 'react';
import './App.css';
import MovieList from './components/MovieList'


// @flow
function App() {

const list = ["Batman", "Superman"];
  return (
    <div className="App">
      <header className="App-header">
        <p>

          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
        </a>
      </header>
      <MovieList list={list} />
    </div>
  );
}


// @flow
function square(n: number): number {
  return n * n;
}

export default App;
