import Router from '../src/router/router'
import Header from './components/header/header';
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #621D76;
    font-family: 'Gothic A1', sans-serif;
  }
`;

function App() {
  return (    
    <div>
      <GlobalStyle />
      <Header/>
      <Router/>
    </div>
  );
}

export default App;
