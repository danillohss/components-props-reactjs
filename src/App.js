
import './App.css';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
function App() {
  return (
    <div className="App">
      <Frase />
      <Pessoa
        foto='https://via.placeholder.com/150'
        nome='Danillo'
        idade='20'
        profissao='dev'
      />
      <List />
    </div>
  );
}

export default App;
