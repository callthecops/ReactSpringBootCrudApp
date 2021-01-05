import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from "react-bootstrap";
import Footer from './Footer';
import FormCss from './FormCss.css'
import axios from 'axios';
import CardCss from './CardCss.css'

class CarList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cars: [],
            error: ""
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/cars/getCars")
            .then(response => {
                console.log(response.status);
                this.setState(
                    { cars: response.data });
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    error: "Error retrieving data"
                });
            })
    }



    render() {
        const { cars, error } = this.state;
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
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={3}>
                                <br />
                                {/* LEFT SIDE */}
                                <h1>Car Database</h1>
                                <ReactBootstrap.Card>
                                    <ReactBootstrap.Card.Body>Displayed are all the cars in the database.You can modify existing car or delete it.</ReactBootstrap.Card.Body>
                                </ReactBootstrap.Card>
                                {/* LEFT SIDE */}

                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col>
                                {/* CARS DISPLAY START }}*/}
                                <div className="cardParent">
                                    {
                                        cars.length ?
                                            cars.map(cars =>
                                                <div key={cars.id} >
                                                    {
                                                        <div>
                                                            <ReactBootstrap.Card style={{ width: '18rem' }}>
                                                                <ReactBootstrap.Card.Img variant="top" src="holder.js/100px180" />
                                                                <ReactBootstrap.Card.Body>
                                                                    <ReactBootstrap.Card.Title>Card Title</ReactBootstrap.Card.Title>
                                                                    <ReactBootstrap.Card.Text>
                                                                        Some quick example text to build on the card title and make up the bulk of
                                                                        the card's content.
                                                        </ReactBootstrap.Card.Text>
                                                                    <ReactBootstrap.Button variant="primary">Go somewhere</ReactBootstrap.Button>
                                                                </ReactBootstrap.Card.Body>
                                                            </ReactBootstrap.Card>

                                                        </div>
                                                    }
                                                    <br />
                                                </div>

                                                // <div key={cars.id}>{cars.price}</div>
                                            ) :
                                            null

                                    }
                                </div>
                                {
                                    error ? <div>{error}</div> : null
                                }
                                <ReactBootstrap.Card style={{ width: '18rem' }}>
                                    <ReactBootstrap.Card.Img variant="top" src="holder.js/100px180" />
                                    <ReactBootstrap.Card.Body>
                                        <ReactBootstrap.Card.Title>Card Title</ReactBootstrap.Card.Title>
                                        <ReactBootstrap.Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
    </ReactBootstrap.Card.Text>
                                        <ReactBootstrap.Button variant="primary">Go somewhere</ReactBootstrap.Button>
                                    </ReactBootstrap.Card.Body>
                                </ReactBootstrap.Card>

                                {/* CARS DISPLAY END }}*/}

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
export default CarList
