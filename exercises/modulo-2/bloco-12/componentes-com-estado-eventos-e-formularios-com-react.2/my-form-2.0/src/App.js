// import React, { Component } from 'react'
// // import './Form.css'

// class Form extends Component {
//   constructor() {
//     super();

//     this.handleChange = this.handleChange.bind(this);

//     this.state = {
//       estadoFavorito: '',
//     };
//   }


//   handleChange(event) {
//     this.setState({
//       estadoFavorito: event.target.value,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
//         <form className="form">
//           <label>
//             Diga qual o seu Estado favorito! De React ou do Brasil, você decide!
//               <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
//           </label>
//           <input
//             type="number"
//             name="idade"
//           />
//           <input
//             type="checkbox"
//             name="vaiComparecer"
//           />
//           <label>
//           Escolha seu sabor favorito:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="laranja">Laranja</option>
//             <option value="limao">Limão</option>
//             <option value="coco">Coco</option>
//             <option value="manga">Manga</option>
//           </select>
//         </label>
//         <input type="submit" value="Enviar" />
//         <input type="submit" value="Receber" />
//         </form>
//       </div>
//     );
//   }
// }

// export default Form;

/* ====================== */

// import React from 'react';

// class Button extends React.Component {
//   render() {
//     /* A função que altera o estado do componente pai chega
//        ao componente filho via `props`! */
//     const { handleClick } = this.props;

//     return (<button type="button" onClick={handleClick} >Contar clique!</button>);
//   }
// }

// class App extends React.Component {
//   constructor() {
//     super();

//     this.handleClick = this.handleClick.bind(this);

//     // O componente pai é o dono do estado!
//     this.state = {
//       numeroDeCliques: 0,
//     };
//   }

//   /* A função de alterar o estado é definida no componente pai*/
//   handleClick() {
//     this.setState((estadoAnterior) => ({
//       numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
//     }));
//   }

//   /* O componente filho recebe a função de alterar estado do pai via `props`,
//      na forma de uma callback */
//   render() {
//     return (
//       <div>
//         <h1>{`${this.state.numeroDeCliques} cliques!`}</h1>
//         <Button handleClick={this.handleClick} />
//       </div>
//     );
//   }
// }

// export default App

/* ============================ */
// import React from 'react';

// class App extends React.Component {

//   /* A função de alterar o estado é definida no componente pai*/
 

//   /* O componente filho recebe a função de alterar estado do pai via `props`,
//      na forma de uma callback */
//   render() {
//     return (
//       <div>
//         <fieldset>
//           <label type="text" >texto</label><br/></fieldset>
//           <input type="text" ></input> 
//           <input type="text" ></input>
        
//       </div>
//     );
//   }
// }

// export default App
/* ================== exercícios de fixação ========== */
// import React, { Component } from 'react'

// class Form extends Component {
//   constructor() {
//     super();

//     this.handleChange = this.handleChange.bind(this);

//     this.state = {
//       name: '',
//       email: '',
//       age: '',
//       anecdote: '',
//       terms: false,
//     };
//   }

//   handleChange({ target }) {
//     const { name } = target;
//     const value = (target.type === 'checkbox') ? target.checked : target.value
//     this.setState({
//       [name]: value,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
//         <form className="form">
//           <fieldset>
//             <legend>Informações pessoais</legend>
//             <label>
//               Nome:
//               <input
//                 name="name"
//                 type="text"
//                 onChange={ this.handleChange }
//               />
//             </label>
//             <label>
//               Email:
//               <input
//                 name="email"
//                 type="email"
//                 onChange={ this.handleChange }
//               />
//             </label>
//             <label>
//               Idade:
//               <select
//                 name="age"
//                 defaultValue=""
//                 onChange={ this.handleChange }
//               >
//                 <option value="">Selecione</option>
//                 <option value="adult">Maior que 18</option>
//                 <option value="underage">Menor que 18</option>
//               </select>
//             </label>
//           </fieldset>
//           <fieldset>
//             <legend>Texto e arquivos</legend>
//             <label>
//               Anedota:
//               <textarea
//                 name="anecdote"
//                 onChange={ this.handleChange }
//               />
//             </label>
//             <input type="file" />
//           </fieldset>
//           <label>
//             <input
//               type="checkbox"
//               name="terms"
//               onChange={ this.handleChange }
//             />
//             Concordo com termos e acordos
//           </label>
//         </form>
//       </div>
//     );
//   }
// }

// export default Form;
/* ===================Exrcícios do final da aula ========= */
import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import FormError from './FormError';
import FormDataDisplay from './FormDataDisplay';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  formError: {},
  submitted: false,
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  changeHandler = event => {
    let { name, value } = event.target;

    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = this.validateAddress(value);

    this.updateState(name, value);
  }

  onBlurHandler = event => {
    let { name, value } = event.target;

    if (name === 'city') value = value.match(/^\d/) ? '' : value;

    this.updateState(name, value);
  }

  updateState(name, value) {
    this.setState((state) => ({
      [name]: value,
      formError: {
        ...state.formError,
        [name]: this.validateField(name, value)
      }
    }));
  }

  validateAddress = address => address.replace(/[^\w\s]/gi, '')

  handleSubmit = event => {
    event.preventDefault();
  }

  validateField(fieldName, value) {
    switch (fieldName) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)
        return isValid ? '' : ' is invalid';
      default:
        break;
    }
    return '';
  }

  resetForm = () => { this.setState(INITIAL_STATE) };

  sendForm = () => { this.setState({ submitted: true }) };

  render() {
    const { submitted } = this.state;

    return (
      <main>
        <Form
          sendForm={this.sendForm}
          resetForm={this.resetForm}
          changeHandler={this.changeHandler}
          currentState={ this.state }
          onBlurHandler={ this.onBlurHandler }
        />
        <div className="container">
          <FormError formError={this.state.formError} />
        </div>
        { submitted && <FormDataDisplay currentState={ this.state } /> }
      </main>
    );
  }
}

export default App;
/* ============================ */