  // // App.js
  // import React from 'react';
  // import './App.css';
  
  // function App() {
  //   return (
  //     <div className="App">
  //       <label htmlFor="id-email">
  //         Email
  //       </label>
  //       <input id="id-email" type="email" />
  //       <input id="btn-send" type="button" data-testid="id-send" value="Enviar" />
  //       <input id="btn-back" type="button" value="Voltar" />
  //     </div>
  //   );
  // }
  
  // export default App;

  /* ------------------------------------ */

    // App.js
// import React, { Component } from 'react';
// import ValidEmail from './ValidEmail';
// import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       saveEmail: '',
//     };
//   }

//   changeEmail(value) {
//     this.setState({ email: value });
//   }

//   changeSaveEmail(value) {
//     this.setState({ saveEmail: value, email: '' });
//   }

//   render() {
//     const { email, saveEmail } = this.state;
//     return (
//       <div className="App">
//         <label htmlFor="id-email">
//           Email
//         </label>
//         <input
//           id="id-email"
//           value={email}
//           type="email"
//           onChange={(e) => this.changeEmail(e.target.value)}
//         />
//         <input
//           id="btn-enviar"
//           type="button"
//           data-testid="id-send"
//           value="Enviar"
//           onClick={() => this.changeSaveEmail(email)}
//         />
//         <input id="btn-id" type="button" value="Voltar" />
//         <ValidEmail email={saveEmail}/>
//       </div>
//     );
//   }
// }

// export default App;
/* ------------------------------- DIA-2 ---------------------- */
// App.js
// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       joke: '',
//     }
//   }

//   componentDidMount() {
//     const API_URL = 'https://icanhazdadjoke.com/';
//     fetch(API_URL, { headers: { Accept: 'application/json' } })
//       .then((response) => response.json())
//       .then((data) => this.setState({ joke: data.joke }));
//   }

//   render() {
//     return (
//       <div className="App">
//         {this.state.joke}
//       </div>
//     );
//   }
// }

// export default App;
/* ------------------------------- DIA-2 ---------------------- */

import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
    };
  }

  handleInput(e) {
    const { name, value } = e.target;
    console.log(name, value);
    console.log(`${name}: ${value}`);
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h1>Teste de inputs</h1>
        <p>
          Nome:
          <input
            onChange={(e) => this.handleInput(e)}
            name='nome'
            data-testid='input-nome'
            value={this.state.nome}
          />
        </p>
        <p>
          E-mail:
          <input
            onChange={(e) => this.handleInput(e)}
            name='email'
            data-testid='input-email'
            value={this.state.email}
          />
        </p>
      </div>
    );
  }
}

export default App;

/* ------------------------------- DIA-2 ---------------------- */
/* ------------------------------- DIA-2 ---------------------- */
/* ------------------------------- DIA-2 ---------------------- */
/* ------------------------------- DIA-2 ---------------------- */