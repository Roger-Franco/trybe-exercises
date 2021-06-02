Checklist do react-redux

 - [ ] npx create-react-app my-app-redux;
 - [ ] npm install --save redux react-redux;
 - [ ] (npm install react-redux redux react-router-dom) *com router
 - [ ] npm install.

Criar dentro do diretório src:

 - [ ] diretório actions;
 - [ ] diretório reducers;
 - [ ] diretório store.

Criar dentro do diretório actions:

 - [ ] arquivo index.js.

Criar dentro do diretório reducers:

 - [ ] arquivo index.js.

Criar dentro do diretório store:

 - [ ] arquivo index.js.

No arquivo App.js:

 - [ ] definir o Provider, <Provider store={ store }>, para fornecer os estados à todos os componentes encapsulados em <App />.

No arquivo store/index.js:

 - [ ] importar o rootReducer e criar a store
 - [ ] configurar o Redux DevTools

Na pasta reducers:

 - [ ] criar os reducers necessários
 - [ ] configurar os exports do arquivo index.js

Na pasta actions:

 - [ ] criar os actionTypes
 - [ ] criar as actions necessárias

Nos componentes:

 - [ ] criar a função mapStateToProps
 - [ ] criar a função mapDispatchToProps
 - [ ] fazer o connect

 ------------------------------------------------
 ### Aplicação na prática conforme exercício 16.3

-----------------------------------------------------

### Passo a passo do exercício 16.3


// src/actions/index.js  <br/>
export const addRegister = value => ({ type: 'ADD_REGISTER', data: value });
export const login = value => ({ type: 'LOGIN', value });

---------------------------------------------------
// src/reducers/login.js
const Initial_State = {};

function loginReducer(state = Initial_State, action) {
  switch (action.type) {
    case 'LOGIN':
      return action.value;
    default:
      return state;
  }
}

export default loginReducer;
---------------------------------------------------
// src/reducers/register.js
const Initial_State = [];

function registerReducer(state = Initial_State, action) {
  switch (action.type) {
    case 'ADD_REGISTER':
      return [...state, action.data];
    default:
      return state;
  }
}

export default registerReducer;
---------------------------------------------------
// src/reducers/index.js
import { combineReducers } from 'redux';
import loginReducer from './login';
import registerReducer from './register';

const rootReducers = combineReducers({ registerReducer, loginReducer });

export default rootReducers;
---------------------------------------------------
// src/store/index.js
import { createStore } from 'redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer);

export default store;
---------------------------------------------------
// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './store';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Clients from './Clients';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/clients" component={Clients} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
---------------------------------------------------
// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        Bem-vindo ao sistema de cadastramento!
        <Link to="/Login">Faça seu Login</Link>
      </div>
    );
  }
}

export default Home;
---------------------------------------------------
// src/Login.js
import React from 'react';
import { connect } from 'react-redux';
import { login } from './actions';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <div>
          <input
            type="text"
            onChange={e => this.setState({ email: e.target.value })}
            placeholder="email"
          />
          <input
            type="password"
            onChange={e => this.setState({ password: e.target.value })}
            placeholder="senha"
          />
        </div>
        <Link
          to="/clients"
          onClick={() => this.props.login({ email, password })}>
          Entre
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: e => dispatch(login(e))});

export default connect(null, mapDispatchToProps)(Login);
---------------------------------------------------// src/Register.js
import React from 'react';
import { connect } from 'react-redux';
import { addRegister } from './actions';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
    };
  }

  validateRegister = () => {
    const { name, age, email } = this.state;
    this.props.addRegister({ name, age, email });
    this.setState({
      name: '',
      age: '',
      email: '',
    });
  };

  render() {
    const { name, age, email } = this.state;
    const { userLogin } = this.props;
    if (!userLogin.email) return <div>Login não efetuado!</div>;
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Idade"
            value={age}
            onChange={e => this.setState({ age: e.target.value })}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
          />
        </div>
        <button onClick={this.validateRegister}>Registrar Cliente</button>
        <Link to="/clients">Ver clientes cadastrados</Link>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userLogin: state.loginReducer});
const mapDispatchToProps = dispatch => ({
  addRegister: e => dispatch(addRegister(e))});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
---------------------------------------------------
// src/Clients.js
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Clients extends React.Component {
  render() {
    const { registers, userLogin } = this.props;
    if (!userLogin.email) return <div>Login não efetuado!</div>;
    if (registers.length < 1)
      return (
        <div>
          <div>Nenhum cliente cadastrado</div>
          <Link to="/register">Cadastre agora!</Link>
        </div>
      );
    return (
      <div>
        <Link to="/register">Cadastre outros!</Link>
        <div>
          {registers.map((register, index) => {
            return (
              <div key={register.email}>
                <p>ID de registro: {index + 1}</p>
                <p>Nome: {register.name}</p>
                <p>Idade: {register.age}</p>
                <p>Email: {register.email}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  registers: state.registerReducer,
  userLogin: state.loginReducer});

export default connect(mapStateToProps)(Clients);
---------------------------------------------------
---------------------------------------------------
