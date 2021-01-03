import './App.css';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import CarList from './components/CarList';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from "react-bootstrap";
import Footer from './components/Footer';
// import CarImage from './images/whitecar.jpg'
import FormCss from './components/FormCss.css'



function App() {
  return (
    <Home />
  );
}

export default App;
