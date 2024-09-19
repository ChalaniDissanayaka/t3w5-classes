import './App.css';
import React from 'react';
import PokemonFetcher from './PokemonFetcher';

class App extends React.Component {

  render() {
    return (
      <div className="App">

        <h1>{process.env.REACT_APP_EXAMPLE_ENV}</h1>

        <PokemonFetcher />

        {/* <PokemonFetcher />
           <PokemonFetcher />
           <PokemonFetcher /> */}
        
      </div>
    );
  }
  
}

export default App;
