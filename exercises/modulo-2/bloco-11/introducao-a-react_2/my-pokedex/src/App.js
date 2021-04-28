import logo from './logo.svg';
import pokemonData from './data'
import './App.css';
import './pokemon.css';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <div>
      <h1>Pokedex</h1>
    <div className="main-container">
    <PokemonList PokemonList={ pokemonData } />
  </div>
  </div>
  );
}

export default App;
