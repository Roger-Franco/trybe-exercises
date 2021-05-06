// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

/* ============================ */
// import React from 'react';
// import './App.css';

//   // Counter.js
//     // Counter.js
//     class Counter extends React.Component {
//       constructor(props) {
//         super(props);
//         this.state = {
//           counter: 0
//         };
//         console.log("construtor");
//       }
  
//       componentDidMount() {
//         this.setState({ counter: 10 });
//       }
  
//       shouldComponentUpdate(_, nextState) {
//         if (nextState.counter > 13 && nextState.counter < 15) return false;
//         return true;
//       }
  
//       componentDidUpdate(prevProps, prevState) {
//         console.log("componentDidUpdate");
//       }
  
//       render() {
//         console.log("render");
//         return (
//           <div>
//             <p>Contador</p>
//             <button
//               onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
//             >
//               Soma
//             </button>
//             <p>{this.state.counter}</p>
//           </div>
//         );
//       }
//     }

// export default Counter;
/* ======================== */

// App.js
// import React, { Component }from 'react';
// import './App.css';

// class App extends Component {
//   state = {
//     characters: [],
//   }
  
//   fetchCharacters = () => {
//     fetch('https://rickandmortyapi.com/api/character')
//     .then(response => response.json())
//     .then(data => {
//       this.setState({characters: data.results})
//     })
// //   }
  
//   render() {
//     return (
//       <div className="App">
//         <h1>
//           Ricky and Morty Characters:
//         </h1>
//       </div>
//     );
//   }
// }

// export default App;

/* ======================== */
// App.js
// import React, { Component }from 'react';
// import './App.css';

// class App extends Component {
//   state = {
//     characters: [],
//   }
  
//   fetchCharacters = () => {
//     fetch('https://rickandmortyapi.com/api/character')
//     .then(response => response.json())
//     .then(data => {
//       this.setState({characters: data.results})
//     })
//   }
  
//   render() {
//     const { characters } = this.state;
//     return (
//       <div className="App">
//       <h1>
//         Ricky and Morty Characters:
//       </h1>
//       <div className="body">
//         {characters.map(({ name, image }) => {
//           return (
//             <div className="container" key={name}>
//               <h3>{name}</h3>
//               <img src={image} alt={name}/>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   );
// }
// }

// export default App;
/* ======================== */

// import React, { Component }from 'react';
// import './App.css';

// class App extends Component {
//   state = {
//     characters: [],
//   }
  
//   // fetchCharacters = () => {
//   //   fetch('https://rickandmortyapi.com/api/character')
//   //   .then(response => response.json())
//   //   .then(data => {
//   //     this.setState({characters: data.results})
//   //   })
//   // }

//   // componentDidMount() {
//   //   this.fetchCharacters();
//   // }
//   /* ------------------------ */
//   componentDidMount() {
//     fetch('https://rickandmortyapi.com/api/character')
//     .then(response => response.json())
//     .then(data => {
//       this.setState({characters: data.results})
//     })
//   }
//   /* ------------------------ */
  
//   render() {
//     const { characters } = this.state;
//     return (
//       <div className="App">
//       <h1>
//         Ricky and Morty Characters:
//       </h1>
//       <div className="body">
//         {characters.map(({ name, image }) => {
//           return (
//             <div className="container" key={name}>
//               <h3>{name}</h3>
//               <img src={image} alt={name}/>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   );
// }
// }

// export default App;

/* ======================== */

// import React from "react";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: ""
//     };
//     this.fetchDog = this.fetchDog.bind(this);
//   }

//   componentDidMount() {
//     this.fetchDog();
//   }

//   fetchDog() {
//     fetch("https://dog.ceo/api/breeds/image/random")
//       .then(res => res.json())
//       .then(result => this.setState({ data: result }));
//   }

//   render() {
//     if (this.state.data === "") return "loading...";
//     return (
//       <div>
//         <p>Doguinhos</p>
//         <button onClick={this.fetchDog}>Novo doguinho!</button>
//         <div>
//           <img src={this.state.data.message} alt="Random dog" />
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

/* ======================== */

import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
    this.fetchDog = this.fetchDog.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.data.message.includes("terrier")) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    localStorage.setItem("dogURL", this.state.data.message);
    const dogBreed = this.state.data.message.split("/")[4];
    alert(dogBreed);
  }

  fetchDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(result => this.setState({ data: result }));
  }

  render() {
    if (this.state.data === "") return "loading...";
    return (
      <div>
        <p>Doguinhos</p>
        <button onClick={this.fetchDog}>Novo doguinho!</button>
        <div>
          <img src={this.state.data.message} alt="Random dog" />
        </div>
      </div>
    );
  }
}

export default App;
/* ======================== */