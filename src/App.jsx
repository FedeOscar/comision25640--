import './App.css';
import Navbar from './components/navbar';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Component } from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}
class saludo  extends Component{
  render() {
    return(
      <div className='titulo'>
        <header className='titulo-saludo'>
          <title title="Bienvenido" description="Como estas?"/>
        </header>

      </div>
    );
  }
}

export default App;
