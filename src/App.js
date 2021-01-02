import './App.css';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import CarList from './components/CarList';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from "react-bootstrap";

//To implement bootstrap in our porject we first have to install it with "npm install react-bootstrap bootstrap" and then we need to import the line import 'bootstrap/dist/css/bootstrap.min.css'; in App.js. We can also add the cdn to index.html.(from here https://react-bootstrap.netlify.app/getting-started/introduction)in order to use Bootstrap components we have to import BootstrapReact as a Component(ReactBootstrap).

function App() {
  return (
    <Router>
      <div className="App">
        <ReactBootstrap.Container fluid>
          <ReactBootstrap.Row>
            <ReactBootstrap.Col>
              <ReactBootstrap.Navbar bg="primary" variant="dark">
                <ReactBootstrap.Navbar.Brand href="#home">Navbar</ReactBootstrap.Navbar.Brand>
                <ReactBootstrap.Nav className="mr-auto">
                  <ReactBootstrap.Nav.Link href="#home">Home</ReactBootstrap.Nav.Link>
                  <ReactBootstrap.Nav.Link href="#features">Features</ReactBootstrap.Nav.Link>
                  <ReactBootstrap.Nav.Link href="#pricing">Pricing</ReactBootstrap.Nav.Link>
                </ReactBootstrap.Nav>
                <ReactBootstrap.Form inline>
                  <ReactBootstrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <ReactBootstrap.Button variant="outline-light">Search</ReactBootstrap.Button>
                </ReactBootstrap.Form>
              </ReactBootstrap.Navbar>
            </ReactBootstrap.Col>

          </ReactBootstrap.Row>
          <ReactBootstrap.Row>
            <ReactBootstrap.Col>1 of 3</ReactBootstrap.Col>
            <ReactBootstrap.Col>2 of 3</ReactBootstrap.Col>
            <ReactBootstrap.Col>3 of 3</ReactBootstrap.Col>
          </ReactBootstrap.Row>
        </ReactBootstrap.Container>


        {/* <ReactBootstrap.Form>
          <ReactBootstrap.Form.Group controlId="formGroupEmail">
            <ReactBootstrap.Form.Label>Email address</ReactBootstrap.Form.Label>
            <ReactBootstrap.Form.Control type="email" placeholder="Enter email" />
          </ReactBootstrap.Form.Group>
          <ReactBootstrap.Form.Group controlId="formGroupPassword">
            <ReactBootstrap.Form.Label>Password</ReactBootstrap.Form.Label>
            <ReactBootstrap.Form.Control type="password" placeholder="Password" />
          </ReactBootstrap.Form.Group>
        </ReactBootstrap.Form> */}
      </div>
    </Router >
  );
}

export default App;
