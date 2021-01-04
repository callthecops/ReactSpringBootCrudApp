import './App.css';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import CarList from './components/CarList';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from "react-bootstrap";
import Footer from './components/Footer';
// import CarImage from './images/whitecar.jpg'
import FormCss from './components/FormCss.css'
import NotFoundPage from './components/page404'

//In order to use Router we have to first install it. Then we add the routes that we need in our app in the App.js file.For a 404 page we have to simply not add the route or exact path, and add directly the component. This in turn will direct any reuqest that is not made on an exact path to that specific component.
//After we have added the Routes in the App.js, it is time to add inter page links to the other components.like here
//<Link to="/cars" className="links" id="myCars">Cars</Link> . The link in the components has to be on the same route that The main Route in App.js is.
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/cars" component={CarList} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
