import React from 'react';
// import axios from "axios";
import '../css/main.css';
import Tick from '../images/tick.png';

function Login() {
  
  // componentDidMount() {
  //   axios.get(`https://us-central1-php-test-2accd.cloudfunctions.net/helloWorld`)
  //     .then(res => {
  //       console.log(res);
  //     });
  // }
   return (
    <div className="container login-cl">
      <div className="row">
          <div className="col-md-6 align-cl">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner">
                <div className="item active">
                <div className="text-cap-cl">                  
                <h3>Welcome to Prooven!</h3>
                <h4>Your World. Verified.</h4>
                <img src={Tick} alt="Tick Image" className="img-cl"/>
                <p>Integrity. Trust. Accountability.</p>
                <p>Prooven takes a next-gen approach to verifying information that you come across daily.</p>
                <p>We identify items that are true, false, or somewhere in the middle, then show you how those claims stack up to others.</p>
                </div>
                </div>

                <div className="item">
                <div className="text-cap-cl">
                <h3>Thank you</h3>
                <h4>Your World. Verified.</h4>
                <img src={Tick} alt="Tick Image" className="img-cl"/>
                <p>Integrity. Trust. Accountability.</p>
                <p>Prooven takes a next-gen approach to verifying information that you come across daily.</p>
                <p>We identify items that are true, false, or somewhere in the middle, then show you how those claims stack up to others.</p>
                </div>
                </div>
                </div>
                </div>        
          </div>
          <div className="col-md-6 form-left">
              <h3 className="center">Login to your account</h3>
                <form action="/action_page.php">
                <div className="form-group">
                <label for="email">Email address<span className="star">*</span></label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
                </div>
                <div className="form-group">
                <label for="pwd">Password<span className="star">*</span></label>
                <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
                </div>
                <div className="checkbox">
                <label><input type="checkbox" name="remember"/> Remember me</label>
                <a href="#" className="pull-right forgot-link-cl">Forgot Password</a>
                </div>
                <button type="submit" className="btn btn-default">Sign In</button>
                </form>
                <h3 className="free-cl">Sign Up, It's Free!</h3>
          </div>
      </div>
    </div>
  );
}

export default Login;
