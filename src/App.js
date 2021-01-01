import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import CarList from './components/CarList';
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/carList">Car List</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/home" component={Home}>Home</Route>
          <Route path="/carList" component={CarList}>Car List</Route>
        </Switch>

        <header className="App-header">

        </header>
      </div>
    </Router>
  );
}

export default App;
