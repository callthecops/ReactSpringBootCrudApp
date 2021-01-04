import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import CarList from './CarList';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from "react-bootstrap";
import Footer from './Footer';
import FormCss from './FormCss.css'
import axios from 'axios';
// import CarImage from './images/whitecar.jpg'

//To implement bootstrap in our porject we first have to install it with "npm install react-bootstrap bootstrap" and then we need to import the line import 'bootstrap/dist/css/bootstrap.min.css'; in App.js. We can also add the cdn to index.html.(from here https://react-bootstrap.netlify.app/getting-started/introduction)in order to use Bootstrap components we have to import BootstrapReact as a Component(ReactBootstrap).Then we can add any elements by using it as a component directly in the page.

//The easyes way to add style to elements in react is to create add a className to the repsective element, then create a .css file , add the necessary css there and then import the css in the component we are using that class.(import FormCss from './components/FormCss.css)


class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            mark: '',
            model: '',
            year: '',
            fuel: '',
            price: '',
            image: null,
            message: ""
        }
    }

    //e.target.value represents the value of the object that is represented by the inputs.in this case the texts inputed by the user.
    // let's imagine that the state object looks like this
    // let state = {
    //     first_name: 'Lorenzo',
    //     last_name: 'de Grisogono',
    //   }
    //and let's say we have a function that receives e
    //let e = {
    //   target: {
    //     id: 'first_name',
    //     value: 'First Name Changed'
    //   }
    // }
    //in JS, you can do the following with state object:
    //console.log(state.first_name); // Lorenzo
    // console.log(state['first_name']); // Lorenzo
    //2 different ways of doing the same thing
    //now, because you can use the 2nd syntax (the state['first_name']), it also means you can access the keys in an easier way
    //console.log(state[e.target.id]); // Lorenzo => SO ID IS ACTUALLY THE NAME


    //when we have a function like this, it means it reads from e the name of the key on the object.if object is this:
    // let obj = {
    //     first_name: 'Lorenzo'
    //   }
    //  then the key name is first_name and key value is Lorenzo
    //SO BASICALLY WHAT WE HAVE IS A KEY VALUE PAIR AND THE METHOD IS READING THE LEFT AND RIGHT VALUES VARIABLY FOR EACH INDIVIDUAL INPUT.
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleImageChange = (e) => {
        this.setState({
            image: e.target.files[0]
        })
    };

    //It is called upon succesfully submiting the form to the server. It has to receive status code 200, which is automatically sent by the restcontroller to be called.
    successFunction() {
        const place = document.getElementById("responseMessage");
        place.innerHTML = "Car was successfully added to the database";
    }

    failureFunction() {
        const place = document.getElementById("responseMessage");
        place.innerHTML = "Something went wrong, please try again";
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        let form_data = new FormData();
        form_data.append('image', this.state.image, this.state.image.name);
        form_data.append('mark', this.state.mark);
        form_data.append('model', this.state.model);
        form_data.append('year', this.state.year);
        form_data.append('fuel', this.state.fuel);
        form_data.append('price', this.state.price);

        let url = 'http://localhost:8080/cars/submit';
        axios.post(url, form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    this.successFunction();
                }
            })
            .catch(err => {
                console.log(err);
                this.failureFunction();
            })
    };


    render() {
        return (
            <div className="page-container">
                <div className="content-wrap">
                    <ReactBootstrap.Container fluid >
                        {/* ROW 1 */}
                        <ReactBootstrap.Row style={{ backgroundColor: "rgb(0,123,255)" }}>
                            <ReactBootstrap.Col>
                                {/* NavBar */}
                                <ReactBootstrap.Navbar bg="primary" variant="dark">
                                    <ReactBootstrap.Navbar.Brand href="#home">CheapCars.com</ReactBootstrap.Navbar.Brand>
                                    <ReactBootstrap.Nav className="mr-auto">

                                        <Link to="/home" className="links" id="myHome">Home</Link>

                                        <Link to="/cars" className="links" id="myCars">Cars</Link>

                                        {/* <ReactBootstrap.Nav.Link href="#pricing">Pricing</ReactBootstrap.Nav.Link> */}
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
                                <ReactBootstrap.Form className="myForm" onSubmit={this.handleSubmit}>
                                    <p id="responseMessage" value="" style={{ fontSize: "25px" }}></p>
                                    <ReactBootstrap.Form.Group controlId="mark">
                                        {/* <ReactBootstrap.Form.Label></ReactBootstrap.Form.Label> */}
                                        <ReactBootstrap.Form.Control type="text" placeholder="Enter Mark" value={this.state.mark} onChange={this.handleChange} required />
                                    </ReactBootstrap.Form.Group>
                                    <ReactBootstrap.Form.Group controlId="model">
                                        {/* <ReactBootstrap.Form.Label></ReactBootstrap.Form.Label> */}
                                        <ReactBootstrap.Form.Control type="text" placeholder="Car Model" value={this.state.model} onChange={this.handleChange} required />
                                    </ReactBootstrap.Form.Group>
                                    <ReactBootstrap.Form.Group controlId="year">
                                        {/* <ReactBootstrap.Form.Label></ReactBootstrap.Form.Label> */}
                                        <ReactBootstrap.Form.Control type="text" placeholder="Year Fabricated" value={this.state.year} onChange={this.handleChange} required />
                                    </ReactBootstrap.Form.Group>
                                    <ReactBootstrap.Form.Group controlId="fuel">
                                        {/* <ReactBootstrap.Form.Label></ReactBootstrap.Form.Label> */}
                                        <ReactBootstrap.Form.Control type="text" placeholder="Fuel Type" value={this.state.fuel} onChange={this.handleChange} required />
                                    </ReactBootstrap.Form.Group>
                                    <ReactBootstrap.Form.Group controlId="price">
                                        {/* <ReactBootstrap.Form.Label></ReactBootstrap.Form.Label> */}
                                        <ReactBootstrap.Form.Control type="text" placeholder="Price" value={this.state.price} onChange={this.handleChange} required />
                                    </ReactBootstrap.Form.Group>
                                    <ReactBootstrap.Form.Group>
                                        <ReactBootstrap.Form.File id="image" label="" accept="image/png,image/jpeg" onChange={this.handleImageChange} required />
                                    </ReactBootstrap.Form.Group>
                                    <input type="SUBMIT" value="Submit" />
                                    <br />
                                    <br />
                                    <br />
                                </ReactBootstrap.Form>
                                <br />
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        {/* ROW 2 END */}
                    </ReactBootstrap.Container>

                </div>
                <Footer />
            </div >


        )
    }
}
export default Home
