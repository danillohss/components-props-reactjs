
import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Evento numero={5} />
      <Form />
    </div >
  );
}

export default App;
