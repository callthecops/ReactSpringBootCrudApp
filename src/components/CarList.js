import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from "react-bootstrap";
import Footer from './Footer';
import FormCss from './FormCss.css'
import axios from 'axios';
import CardCss from './CardCss.css'
import MyComp from './MyComp'

class CarList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cars: [],
            error: "",
            deleteError: "",
            updateError: "",
            updateCarId: null,
            edit: false,
            buttonWasPressed: false,
            updateObject: {

            }
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
        let car = this.state.cars.find(ele => ele.id === carId);
        console.log(car);

        this.setState({ ...this.state, updateObject: car })

        //this.state.updateObject=
        this.setState(
            {
                updateCarId: carId,
                buttonWasPressed: true,
                edit: true
            }
        )
    }


    updateChanges = (event) => {
        // console.log(event.target.value);
        //In this case here name is the html attribute, we can also do the same with id.
        console.log(event.target.name)
        console.log("The current car object", this.state.updateObject)
        //In the updateObject we use the [] because JS does not support special correctors in keys.(. or /) So we have 
        //a key value pair and we have to put the square backer around the key so it can work.
        //In the setState method we have "...this.state" is the state that we are modifying while we are updating the
        //curent object. and ...this.state.updateObject are the old field that we have to keep.
        this.setState({
            ...this.state, updateObject: { ...this.state.updateObject, [event.target.name]: event.target.value }

        })
    }

    makeUpdate = () => {
        console.log(this.state.update)

    }


    render() {
        const { cars, error } = this.state;
        return (
            <>


                {this.state.edit ? <div><h1>Edit Component  </h1>

                    <input type="text" value={this.state.updateObject.mark} name="mark" onChange={(event) => this.updateChanges(event)} />

                    <input type="text" value={this.state.updateObject.model} name="model" onChange={(event) => this.updateChanges(event)} /><br />

                    <input type="text" value={this.state.updateObject.year} name="year" onChange={
                        (event) => this.updateChanges(event)} /><br />
                    <input type="text" value={this.state.updateObject.fuel} name="fuel" onChange={
                        (event) => this.updateChanges(event)} /><br />
                    <input type="text" value={this.state.updateObject.price} name="price" onChange={
                        (event) => this.updateChanges(event)} /><br />
                    <input type="file" value={this.state.updateObject.image} name="image" onChange={
                        (event) => this.updateChanges(event)} /><br />

                    <button type="button" onClick={this.makeUpdate}>Update Car</button>

                    <button onClick={() => this.setState({ ...this.state, edit: false })}>Go Back</button></div> : <div className="page-container">
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

                                        {this.state.buttonWasPressed && <MyComp carId={this.state.updateCarId} />}

                                        {/* CARS DISPLAY END }}*/}

                                        <br />
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                                {/* ROW 2 END */}
                            </ReactBootstrap.Container>

                        </div>
                        <Footer />
                    </div >}



            </>

        )
    }
}
export default CarList
