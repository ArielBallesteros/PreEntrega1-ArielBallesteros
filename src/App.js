import './App.css';
import {NavBar} from './components/navbar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <Router>
    <NavBar/>
    <ListContainer/>
    </Router>
    </>
  );
}

export default App;
