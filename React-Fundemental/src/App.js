import logo from './logo.svg';
import './App.css';
import {Great} from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Great /> 
      <Welcome /> 
    </div>
  );
}

export default App;
