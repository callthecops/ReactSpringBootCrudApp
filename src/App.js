import './App.css';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import CarList from './components/CarList';
function App() {
  return (
    <Router>
      <div className="App">

        {/* <nav>
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
        </header> */}

        {/* START */}
        <div className="probootstrap-loader"></div>

        <header role="banner" className="probootstrap-header">
          <div className="container">
            <a href="index.html" className="probootstrap-logo">Black<span>.</span></a>

            {/* <a href="#" className="probootstrap-burger-menu visible-xs" ><i>Menu</i></a> */}
            <div className="mobile-menu-overlay"></div>

            <nav role="navigation" className="probootstrap-nav hidden-xs">
              <ul className="probootstrap-main-nav">
                <li><a href="index.html">Home</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="about.html">About</a></li>
                <li className="active"><a href="contact.html">Contact</a></li>
              </ul>
              <ul className="probootstrap-right-nav hidden-xs">
                {/* <li><a href="#"><i className="icon-twitter"></i></a></li>
                <li><a href="#"><i className="icon-facebook2"></i></a></li>
                <li><a href="#"><i className="icon-instagram2"></i></a></li> */}
              </ul>
              <div className="extra-text visible-xs">
                {/* <a href="#" className="probootstrap-burger-menu"><i>Menu</i></a> */}
                <h5>Address</h5>
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                <h5>Connect</h5>
                <ul className="social-buttons">
                  {/* <li><a href="#"><i className="icon-twitter"></i></a></li>
                  <li><a href="#"><i className="icon-facebook2"></i></a></li>
                  <li><a href="#"><i className="icon-instagram2"></i></a></li> */}
                </ul>
              </div>
            </nav>
          </div>
        </header>
        {/* END HEADER */}
        <section className="probootstrap-slider flexslider">
          <ul className="slides">
            {/* <li style="background-image: url(img/slider_1.jpg);"> */}
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <div className="slides-text probootstrap-animate">
                    <h2>Contact</h2>
                    {/* <p>Free HTML5 Template by <a href="https://uicookies.com/" target="_blank">uicookies.com</a>. Far far away, behind the word mountains, far from the countries.</p> */}
                  </div>
                </div>
              </div>
            </div>
            {/* </li> */}
          </ul>
        </section>
        {/* <!-- END: slider  --> */}

        <section className="probootstrap-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <form action="#" method="post" className="probootstrap-form mb60">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="fname">First Name</label>
                        <input type="text" className="form-control" id="fname" name="fname" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="lname">Last Name</label>
                        <input type="text" className="form-control" id="lname" name="lname" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email" />
                  </div>
                  <div className="form-group">
                    <label for="message">Message</label>
                    <textarea cols="30" rows="10" className="form-control" id="message" name="message"></textarea>
                  </div>
                  <div className="form-group">
                    <input type="submit" className="btn btn-primary" id="submit" name="submit" value="Send Message" />
                  </div>
                </form>
              </div>
              <div className="col-md-3 col-md-push-1">

              </div>
            </div>
          </div>
        </section>


        <footer className="probootstrap-footer probootstrap-bg">
          <div className="container">
            <div className="row mb60">
              <div className="col-md-3">
                <div className="probootstrap-footer-widget">
                  <h4 className="heading">About Black.</h4>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                  {/* <p><a href="#">Read more...</a></p> */}
                </div>
              </div>
              <div className="col-md-3">
                <div className="probootstrap-footer-widget probootstrap-link-wrap">
                  <h4 className="heading">Quick Links</h4>
                  <ul className="stack-link">
                    {/* <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Products</a></li>
                  <li><a href="#">Testimonial</a></li> */}
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="probootstrap-footer-widget">
                  <h4 className="heading">More Links</h4>
                  <ul className="stack-link">
                    {/* <li><a href="#">Projects</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">Career</a></li>
                  <li><a href="#">Support Help</a></li> */}
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="probootstrap-footer-widget probootstrap-link-wrap">
                  <h4 className="heading">Subscribe</h4>
                  <p>Far far away behind the word mountains far from.</p>
                  <form action="#">
                    <div className="form-field">
                      <input type="text" className="form-control" placeholder="Enter your email" />
                      <button className="btn btn-subscribe">Send</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="row copyright">
              <div className="col-md-6">
                <div className="probootstrap-footer-widget">
                  <p>&copy; 2017 <a href="https://uicookies.com/">uiCookies:Black</a>. Designed by <a href="https://uicookies.com/">uicookies.com</a> <br /> Demo Photos from <a href="https://unsplash.com/">Unsplash</a></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="probootstrap-footer-widget right">
                  <ul className="probootstrap-social">
                    {/* <li><a href="#"><i className="icon-twitter"></i></a></li>
                  <li><a href="#"><i className="icon-facebook"></i></a></li>
                  <li><a href="#"><i className="icon-instagram2"></i></a></li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <div className="gototop js-top">
          {/* <a href="#" className="js-gotop"><i className="icon-chevron-thin-up"></i></a> */}
        </div>


        <script src="js/scripts.min.js"></script>
        <script src="js/main.min.js"></script>


        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></script>
        <script src="js/google-map.js"></script>


        <script src="js/custom.js"></script>
        {/* END */}
      </div>
    </Router >
  );
}

export default App;
