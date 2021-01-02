import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>CheapCars.com</h4>
                        <ul className="list-unstyled">
                            <li>075-335-135</li>
                            <li>Bucharest, Romania</li>
                            <li>Some Address Street in Bucharest</li>
                        </ul>
                    </div>

                    {/* Column2 */}
                    <div className="col">
                        <h4>Cars Stuff</h4>
                        <ul className="list-unstyled">
                            <li>Engines</li>
                            <li>Parts</li>
                            <li>Accessories</li>
                        </ul>
                    </div>

                    {/* Column3 */}
                    <div className="col">
                        <h4>Another Column</h4>
                        <ul className="list-unstyled">
                            <li>Stuff</li>
                            <li>More Stuff</li>
                            <li>Even more stuff</li>
                        </ul>
                    </div>
                </div>
                <br />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} CheapCars.com | All rights reserved | Terms of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;