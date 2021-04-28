import React from 'react';
import Pokemon from './Pokemon';

class PokemonList extends React.Component {
  render() {
    const { PokemonList } = this.props;
    return (
      <section className="x-men-list">
        {PokemonList.map((pokemon) => (
          <Pokemon key={ pokemon.id } pokemonInfo={ pokemon } />))}
      </section>
    );
  }
}

export default PokemonList;