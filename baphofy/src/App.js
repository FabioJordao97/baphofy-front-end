import Router from '../src/router/router'
import Header from './components/header/header';
import { Background } from './components/header/styles';

function App() {
  return (
    <Background>
      <Header/>
      <Router/>
    </Background>
  );
}

export default App;
