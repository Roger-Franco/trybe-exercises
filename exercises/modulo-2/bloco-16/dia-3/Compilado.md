
***  OBSERVAÇÕES  ***
- Neste exemplo usaremos um player de filmes(movies) da aula ao vivo dada pela Maitê em 31/05/2021 às 16:20 hs.
- Utilize este compilado em tela cheia no seu notebook ou desktop para manter o que foi digitado em seu devido lugar e não haver quebra de linha.
- Se achar necessário acrescentar algo, arrumar algo ou até retirar algo para seu melhor entendimento.
- Este compilado foi criado no intuíto de ajudar. A aplicação não está descrita aqui, somente a teoria de como o Redux funciona ok.
- Lembrando que eu não sou o instrutor ou o especialista 😂️.
- Criado por André Arnoni- Tribo 10 B, espero que lhe seja útil de alguma forma 😉️
😎️1 - npx create-react-app my-app-redux
😎️2 - npm i --save redux react-redux 
     - (👉️aqui você instala tanto o redux quanto o react-redux)
😎️3 - npm install 
     - (👉️aqui você instala as dependências necessárias)
😎️4 - Criar dentro do diretório src:
/////diretório actions;
    - Vá ao diretório src
    - Clicar com o botão direito e selecionar New Folder
    - Colocar actions como nome desta nova folder
        
/////diretório reducers;
    - Vá ao diretório src
    - Clicar com o botão direito e selecionar New Folder
    - Colocar reducers como nome desta nova folder
    
/////diretório store.
    - Vá ao diretório src
    - Clicar com o botão direito e selecionar New Folder
    - Colocar store como nome desta nova folder
    
😎️5 - Criar dentro do diretório actions:
/////arquivo index.js.
    - Vá ao diretório src/actions
    - Clicar com o botão direito e selecionar New File
    - Colocar index.js como nome desta nova file
    
😎️6 - Criar dentro do diretório reducers:
/////arquivo index.js.
    - Vá ao diretório src/reducers
    - Clicar com o botão direito e selecionar New File
    - Colocar index.js como nome desta nova file
    
😎️7 - Criar dentro do diretório store:
/////arquivo index.js.
    - Vá ao diretório src/store
    - Clicar com o botão direito e selecionar New File
    - Colocar index.js como nome desta nova file
    
😎️8 - No arquivo App.js definir o Provider para fornecer os estados à todos os componentes encapsulados: 
    - Fazer o import { Provider } from 'react-redux'
    - Encapsular o componente App com o Provider da mesma maneira que o <BrowserRouter>, passando store como props (conforme abaixo):
    
      <Provider store={ store }>
        <firstComponent />
        <secondComponent />
        <thirdComponent />
      </Provider>
      
    - import store from './store'   
    
😎️9 - No arquivo store/index.js:
    - import { createStore } from 'redux';
    - import rootReducer from '../reducers';
    
    - const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),   (👉️código para configurar a extensão do redux devtools)
      );
      
    - export default store;
😎️10 - No arquivo reducers/index.js:
     - import { combineReducers } from 'redux';
     - import movieReducer from './movieReducer';        (👉️Iremos ainda criar este reducer de movies em outra file)
     - export default rootReducer = combineReducer({
          movies: movieReducer,                          (👉️Cria-se uma chave movies para utilizar o movieReducer)
       })   
😎️11 - No arquivo reducers:
     - Selecionar New File para adicionar um novo reducer além do index, quantos forem necessarios (👉️Todos reducers serão concentrados no index)
     - Criar com o nome de movieReducer e com a configuração abaixo(usada como exemplo):
      
       import categoriesData from '../data';
       import SELECT_MOVIE from '../actions/index';
       
       const INITIAL_STATE = {              (👉️O reducer precisa ter um state inicial)
         selectedMovie: {},
         selectedCategory: {},
         categories: categoriesData,
       }    
    
       export default function movieReducer(state = INITIAL_STATE, action) {     (👉️Necessário 2 parametros: estado inicial(state) e action)
          switch (action.type) {
             case SELECT_MOVIE:
                return {
                   ...state,                                        (👉️Fazer o spread para pegar os dados iniciais do state)
                   selectedMovie: action.payload.selectedMovie,         (👉️SelectedMovie e SelectedCategory são chaves contidas no payload 
                   selectedCategory: action.payload.selectedCategory,    da action. Também são chaves do INITIAL_STATE do movieReducer)
                };
             default:
                return state;
          }            
       }
 
😎️12 - No arquivo actions/index.js:
     - const SELECT_MOVIE = 'SELECT_MOVIE';
     
     - export default SELECT_MOVIE;
     
😎️13 - No arquivo actions:
     - Selecionar New File e criar uma action com o nome movieActions (👉️Usado este nome somente como exemplo para facilitar)
     - Na configuração proceder conforme abaixo:
     
     import SELECT_MOVIE from './index';
     
     export default function selectMovie(selectedMovie, selectedCategory) {
       return {
         type: SELECT_MOVIE,                
         payload: {                  (👉️Usado short hand conforme os 2 parâmetros de selectMovie) 
           selectedMovie,                            
           selectedCategory,
         }       
       }
     }
        
😎️14 - Nos devidos componentes:
/////import { connect } from 'react-redux';
/////criar a função mapStateToProps conforme abaixo no exemplo:  (👉️Pega o state do store para ser usado no componente)
   
    const mapStateToProps = (state) => ({
      selectedMovie: state.movies.selectedMovie,
      selectedCategory: state.movies.selectedCategory,
    }) 
    
    (👉️abaixo é o mesmo exemplo só que em outro componente)
    
    const mapStateToProps = (state) => ({
      categories: state.movies.categories,     (👉️state: parâmetro do mapStateToProps, movies: chave do movieReducer dentro do rootReducer,
    });                                        categories: chave de dentro do INITIAL_STATE do movieReducer)
                                               (👉️categories(chave inicial): Nome aleatório a ser usado dentro do componente para usar o
                                               state dentro do componente. Ex de uso: const { categories } = this.props;   
     
    
    (👉️Posteriormente atribuir as props no componente de acordo com o que ele precisar de informação, iniciando pelo Ex de uso acima)
 
/////criar a função mapDispatchToProps conforme abaixo no exemplo:   (👉️Dispara actions)
    import { movieActions } from '../actions/movieActions';
    const mapDispatchToProps = (dispatch) => ({
      selectMovie: (movie, category) => dispatch(movieActions(movie, category)),
    });
 
 
/////fazer o connect conforme abaixo no exemplo:
    
    export default connect(mapStateToProps, null)(Player);
    
    ou também em outro componente como exemplo (👉️abaixo é o mesmo exemplo só que em outro componente)
    
    export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);