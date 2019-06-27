import * as  React from 'react';
import { Link } from "react-router-dom";
import axios from "../../axios";
import '../css/main.css';
import Tick from '../images/tick.png';

class Signup extends React.Component {
  
  public componentDidMount() {
    axios.post(`https://us-central1-prooven1-3a324.cloudfunctions.net/createScream`)
      .then(res => {
        console.log(res);
      });
  }

  public onclickSignUp=()=>{
    console.log("Signup Submit")
  }

  public render() {
   return (
    <div className="container login-cl">
      <div className="row">
      <div className="col-md-6 align-cl">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators" id="grid">
                <li data-target="#myCarousel" data-slide-to="0" className="active"/>
                <li data-target="#myCarousel" data-slide-to="1"/>
                <li data-target="#myCarousel" data-slide-to="2"/>
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
          <div className="col-md-5 sign-left">
              <h3 className="center">Sign Up</h3>
                <form method="POST" onSubmit={this.onclickSignUp}>
                <div className="form-group">
                <label>Provider Name *</label>
                <input type="text" className="form-control" id="pname" name="pname" />
                </div>
                <div className="form-group">
                <label>Provider Type*</label>
                <select className="form-control select-css" id="type1" >
                <option className="default-drop-cl">Ex. School, University, College, etc.</option>
                <option>Anna University</option>
                </select>
                </div>
                <div className="form-group">
                <label>Operating Country*</label>
                <select className="form-control select-css" id="type2" >
                <option/>
                <option>India</option>
                <option>UK</option>
                <option>USA</option>
                </select>
                </div>
                <div className="form-group">
                <label>Your Name *</label>
                <input type="text" className="form-control" id="name" name="name" />
                </div> 
                <div className="form-group">
                <label>Your Phone *</label>
                <input type="text" className="form-control" id="phone" name="phone" />
                </div>     
                <div className="form-group">
                <label>Your Email *</label>
                <input type="email" className="form-control" id="email" name="email" />
                </div>
                <div className="form-group">
                <label>Website</label>
                <input type="text" className="form-control" id="web" name="web" />
                </div>  
                <div className="form-group">
                <label>About your business</label>
                <textarea className="form-control" id="comment" />
                </div>           
                <Link to="/login"><input type="submit" className="btn custom-btn" value="Sign Up"/></Link>
                </form>
                <h3 className="free-cl">Sign Up, It's Free!</h3>
          </div>
          <div className="col-md-1"/>
      </div>
    </div>
  );
}
}

export default Signup;
