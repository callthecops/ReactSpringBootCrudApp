import './App.css';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import CarList from './components/CarList';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from "react-bootstrap";
import Footer from './components/Footer';
// import CarImage from './images/whitecar.jpg'
import FormCss from './components/FormCss.css'

//To implement bootstrap in our porject we first have to install it with "npm install react-bootstrap bootstrap" and then we need to import the line import 'bootstrap/dist/css/bootstrap.min.css'; in App.js. We can also add the cdn to index.html.(from here https://react-bootstrap.netlify.app/getting-started/introduction)in order to use Bootstrap components we have to import BootstrapReact as a Component(ReactBootstrap).

//The easyes way to add style to elements in react is to create add a className to the repsective element, then create a .css file , add the necessary css there and then import the css in the component we are using that class.(import FormCss from './components/FormCss.css)

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <ReactBootstrap.Container fluid >
            {/* ROW 1 */}
            <ReactBootstrap.Row style={{ backgroundColor: "rgb(0,123,255)" }}>
              <ReactBootstrap.Col>
                {/* NavBar */}
                <ReactBootstrap.Navbar bg="primary" variant="dark">
                  <ReactBootstrap.Navbar.Brand href="#home">CheapCars.com</ReactBootstrap.Navbar.Brand>
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
                {/* NavBar End */}
              </ReactBootstrap.Col>
            </ReactBootstrap.Row>
            {/* ROW 1 END */}
            <br />
            <br />
            <br />
            {/* ROW 2 */}
            <ReactBootstrap.Row>
              <ReactBootstrap.Col xs={3}>
                <br />
                {/* LEFT SIDE */}
                <h1>Car Database</h1>
                <ReactBootstrap.Card>
                  <ReactBootstrap.Card.Body>This is our car database.It is full of cars, both new and old.You can insert cars in our database or view the existing ones.</ReactBootstrap.Card.Body>
                </ReactBootstrap.Card>
                {/* LEFT SIDE */}

              </ReactBootstrap.Col>
              <ReactBootstrap.Col>
                {/* FORM - inline style style={{ background: `url(${CarImage}) no-repeat` }}*/}
                <ReactBootstrap.Form className="myForm">

                  <ReactBootstrap.Form.Group controlId="formGroupMark">
                    <ReactBootstrap.Form.Label></ReactBootstrap.Form.Label>
                    <ReactBootstrap.Form.Control type="text" placeholder="Enter Mark" />
                  </ReactBootstrap.Form.Group>
                  <ReactBootstrap.Form.Group controlId="formGroupModel">
                    <ReactBootstrap.Form.Label></ReactBootstrap.Form.Label>
                    <ReactBootstrap.Form.Control type="text" placeholder="Car Model" />
                  </ReactBootstrap.Form.Group>
                  <ReactBootstrap.Form.Group controlId="formGroupYear">
                    <ReactBootstrap.Form.Label></ReactBootstrap.Form.Label>
                    <ReactBootstrap.Form.Control type="text" placeholder="Year Fabricated" />
                  </ReactBootstrap.Form.Group>
                  <ReactBootstrap.Form.Group controlId="formGroupFuel">
                    <ReactBootstrap.Form.Label></ReactBootstrap.Form.Label>
                    <ReactBootstrap.Form.Control type="text" placeholder="Fuel Type" />
                  </ReactBootstrap.Form.Group>
                  <ReactBootstrap.Form.Group controlId="formGroupPrice">
                    <ReactBootstrap.Form.Label></ReactBootstrap.Form.Label>
                    <ReactBootstrap.Form.Control type="text" placeholder="Price" />
                  </ReactBootstrap.Form.Group>
                  <ReactBootstrap.Form.Group>
                    <ReactBootstrap.Form.File id="exampleFormControlFile1" label="" />
                  </ReactBootstrap.Form.Group>
                  <input type="SUBMIT" value="Submit" />
                  <br />
                  <br />
                  <br />
                </ReactBootstrap.Form>
              </ReactBootstrap.Col>
            </ReactBootstrap.Row>
            {/* ROW 2 END */}
          </ReactBootstrap.Container>
        </Router >
      </div>
      <Footer />
    </div >

  );
}

export default App;
