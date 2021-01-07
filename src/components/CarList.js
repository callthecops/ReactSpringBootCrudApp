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
            error: "",
            deleteError: "",
            updateError: "",
            updateCarId: null
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/cars/getCars")
            .then(response => {
                console.log(response.status);
                console.log(response.data);
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

    displayErrorMessage() {
        alert("Something went wrong, please try again");
    }
    displaySuccessMessage() {
        alert("Action successfull");
    }


    handleClickDelete = (carId) => {

        axios.post('http://localhost:8080/cars/deleteCar/' + carId, {
            mode: 'cors',
            credentials: 'include'
        }).then(res => {
            if (res.status === 200) {
                this.displaySuccessMessage();
            }
        }).catch(err => {
            console.log(err);
            this.displayErrorMessage();
        })
    }

    handleClickUpdate = (carId) => {
        console.log(carId);
        // axios.get("http://localhost:8080/cars/getCar/" + carId)
        //     .then(response)
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
                                                                <ReactBootstrap.Card.Img variant="top" style={{ height: "180px" }} src={`data:image/jpg;base64,${cars.image}`} />

                                                                <ReactBootstrap.Card.Body>
                                                                    <ReactBootstrap.Card.Title>{cars.mark}-{cars.model}</ReactBootstrap.Card.Title>
                                                                    <ReactBootstrap.Card.Header>Price: {cars.price}</ReactBootstrap.Card.Header>
                                                                    <br />
                                                                    <h6>Fabricated: {cars.year}</h6>
                                                                    <h6>{cars.fuel}</h6>
                                                                    <ReactBootstrap.Button variant="success" className="cardButtons" id="cardButtonGreen" onClick={() => this.handleClickUpdate(cars.id)}> Update</ReactBootstrap.Button>
                                                                    <ReactBootstrap.Button variant="danger" className="cardButtons" id="cardButtonRed" onClick={() => this.handleClickDelete(cars.id)}> Delete</ReactBootstrap.Button>
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
