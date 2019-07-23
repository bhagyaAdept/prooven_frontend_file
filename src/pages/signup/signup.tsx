import * as  React from 'react';
// import { Link } from "react-router-dom";
import axios from "../../axios";
import '../css/main.css';
import Tick from '../images/tick.png';

class Signup extends React.Component {

  public state = {
    providername: "",
    providertype: "",
    country: "",
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmpassword: "",
    website: "",
    aboutbusiness: "",
    passwordWrong:false,
    signupSuccess:false,
    countryType:[],
    providerList:[],

  }

  public onChange=(e)=>{
    this.setState({ [e.target.name]: e.target.value });
  } 
  
  public componentDidMount(){
    axios.get(`api/country`)
      .then(res => {
        const countryList = res.data;
        console.log(countryList.sort());
        this.setState({ countryType: res.data});  
      });

      axios.get(`api/provider_type`)
      .then(res => {
        this.setState({ providerList: res.data}); 
      });
  }

  public onclickSignUp = (e) => {
    e.preventDefault();
    const { password, confirmpassword } = this.state;
    if (confirmpassword !== password) {
      this.setState({passwordWrong:true});
    }
    else {
      this.setState({passwordWrong:false});
      axios.post(`api/signup`, {
        provider_name: this.state.providername,
        provider_type: this.state.providertype,
        country: this.state.country,
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
        password: this.state.password,
        website: this.state.website,
        about_business: this.state.aboutbusiness,
      })
        .then(res => {
          console.log(res);
          this.setState({providername:'',providertype:'',country:'',name:'',phone:'',email:'',password:'',confirmpassword:'',website:'',aboutbusiness:''});
          this.setState({signupSuccess:true});
        });
    }
  }


  public render() {
   const {providername,providertype,country,name,phone,email,password,confirmpassword,website,aboutbusiness,countryType} = this.state;
    return (
      <div className="container login-cl">        
        {this.state.signupSuccess?<p className="success-cl">Successfully Submitted !</p>:null}
        <div className="row">
          <div className="col-md-6 align-cl">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators" id="grid">
                <li data-target="#myCarousel" data-slide-to="0" className="active" />
                <li data-target="#myCarousel" data-slide-to="1" />
                <li data-target="#myCarousel" data-slide-to="2" />
              </ol>
              <div className="carousel-inner">
                <div className="item active">
                  <div className="text-cap-cl">
                    <h3>Welcome to Prooven!</h3>
                    <h4>Your World. Verified.</h4>
                    <img src={Tick} alt="Tick Image" className="img-cl" />
                    <p>Integrity. Trust. Accountability.</p>
                    <p>Prooven takes a next-gen approach to verifying information that you come across daily.</p>
                    <p>We identify items that are true, false, or somewhere in the middle, then show you how those claims stack up to others.</p>
                  </div>
                </div>
                <div className="item">
                  <div className="text-cap-cl">
                    <h3>Thank you</h3>
                    <h4>Your World. Verified.</h4>
                    <img src={Tick} alt="Tick Image" className="img-cl" />
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
                <input 
                type="text" 
                className="form-control" 
                id="pname" 
                name="providername" 
                value={providername}                
                onChange={this.onChange}
                required
                />
              </div>
              <div className="form-group">
                <label>Provider Type*</label>
                <select className="form-control select-css" id="type1" name="providertype" value={providertype} onChange={this.onChange} required>
                <option />
                    {this.state.providerList.map(list =>
                        <option key={list.id} value={list.id}>{list.name}</option>
                    )}; 
                </select>
              </div>
              <div className="form-group">
                <label>Operating Country*</label>
                <select className="form-control select-css" id="type2" name="country" value={country} onChange={this.onChange} required>
                  <option />
                  {countryType.map(countryList  => countryList === null ? '': 
                    <option key={countryList.code} value={countryList.code}>{countryList.name}</option>
                    )}; 
                </select>
              </div>
              <div className="form-group">
                <label>Your Name *</label>
                <input 
                type="text" 
                className="form-control" 
                id="name" 
                name="name" 
                value={name}
                onChange={this.onChange}
                required
                pattern="[A-Za-z]{3}" 
                />
              </div>
              <div className="form-group">
                <label>Your Phone *</label>
                <input 
                type="text" 
                className="form-control" 
                id="phone" 
                name="phone" 
                value={phone}
                onChange={this.onChange}
                required
                pattern="[789][0-9]{9}"
                />
              </div>
              <div className="form-group">
                <label>Your Email *</label>
                <input 
                type="email" 
                className="form-control" 
                id="email" 
                name="email" 
                value={email}
                onChange={this.onChange}
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
              </div>
              <div className="form-group">
                <label>Your Password *</label>
                <input 
                type="password" 
                className="form-control" 
                id="password" 
                name="password" 
                value={password}
                onChange={this.onChange}
                required
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                />
              </div>
              <div className="form-group">
                <label>Your ConfirmPassword *</label>
                <input 
                type="password" 
                className="form-control" 
                id="confirmpassword" 
                name="confirmpassword" 
                value={confirmpassword}
                onChange={this.onChange}
                required
                />
              </div>
              {this.state.passwordWrong?<p className="error-cl">Password do not match</p>:null}
              <div className="form-group">
                <label>Website</label>
                <input 
                type="text" 
                className="form-control" 
                id="web" 
                name="website" 
                value={website}
                onChange={this.onChange}
                required
                pattern="https?://.+"
                />
              </div>
              <div className="form-group">
                <label>About your business</label>
                <textarea 
                className="form-control" 
                id="comment" 
                name="aboutbusiness" 
                value={aboutbusiness}
                onChange={this.onChange}
                required
                />
              </div>
                <input 
                type="submit" 
                className="btn custom-btn" 
                value="Sign Up" 
                />
            </form>
            <h3 className="free-cl">Sign Up, It's Free!</h3>
          </div>
          <div className="col-md-1" />
        </div>
      </div>
    );
  }
}

export default Signup;