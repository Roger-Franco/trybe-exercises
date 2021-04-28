import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemonInfo: { name, type, image,averageWeight } } = this.props;
    return (
      <section className="pokemon-card">
        <h3>
          { name }
        </h3>
        <p>
          Tipo:
          { type }
        </p>
        <p>
          Peso:
          {averageWeight.value}{averageWeight.measurementUnit}
        </p>
        <img src={ image } alt={ name } />
      </section>
    );
  }
}

export default Pokemon;