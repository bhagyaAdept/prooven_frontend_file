import * as  React from 'react';
// import axios from "../../axios";
import { Link } from 'react-router-dom';
import { Dispatch } from "redux";
import { connect } from "react-redux";
import QR from '../images/QR.png';
import '../css/main.css';

interface IProps {
    about_business:any,
    country:any,
    email:any,
    name:any,
    phone:any,
    privateKey:any,
    provider_name:any,
    provider_type:any,
    publicKey:any,
    website:any,
    loginInfo:any;
  }

class Profile extends React.Component<IProps> {

    public state={
        privateKey: false,
        publicKey: false,
    }
      
    // public componentDidMount() {
    //     axios.post(`https://us-central1-prooven1-3a324.cloudfunctions.net/createScream`)
    //         .then(res => {
    //             console.log(res);
    //         });
    // }
    public privateKey(){
        this.setState({privateKey:true});
    }
    public publicKey(){
        this.setState({publicKey:true});
    }

    public render() {
        return (
            <div className="body_offwhite">
            <div className="container my_container">
                           
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 "> <h1>Profile</h1>  <br /><br /></div>                 

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                <div className="row">
            {/*---------------------start left block--------------- */}
                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">


                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pdg_25 bkg_white">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 user-image text-center ">
               <h1> <i className = "fa fa-user-circle-o"/></h1>
                <h4 className=""><Link to="">Upload Photo</Link></h4>
                </div> {/* col-4 */}
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 user-image ">
                    <br />
                    <h3>{this.props.name}</h3>
                    {/* <h5>Joined in 2014</h5> */}
                    <hr />
                    </div>{/* end of col-8*/}
                </div>{/* end of col-md-12 */}
                {/*----------------------------------------------------------
                ------------------------------------------------------------- */}
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><br /></div>
                 {/*----------------------------------------------------------
                ----------------------------------------------*/}


                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pdg_25 bkg_white qr">
               
               <h3> Blockchain credentials <span className="flt_rgt"><i className="fa fa-plus" /></span></h3>
               <div className="qr-img">                    
               <img src={ QR } alt="QR" className="" />
               <p><b>Private key :</b><span className="click-cl" onClick={()=>this.privateKey()}> Click Here</span></p>               
               {this.state.privateKey?
                 <p>{this.props.privateKey}</p>
                :null}
                <p><b>Public key :</b><span className="click-cl" onClick={()=>this.publicKey()}> Click Here </span></p>
                 {this.state.publicKey?
                 <p>{this.props.publicKey}</p>
                :null}

               </div>
                
                </div>{/* end of col-md-12 */}

                      {/*----------------------------------------------------------
                ------------------------------------------------------------- */}
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><br />   </div>
                 {/*----------------------------------------------------------
                ----------------------------------------------*/}
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pdg_25 bkg_white ">
               
               <h3>Education <span className="flt_rgt"><i className="fa fa-plus" /></span></h3>
               
                {/* <h4>Univercity of arizona </h4><h4>2014</h4> */}
                
                {/* <h4>Nuteritional Sciences</h4> */}
                </div>{/* end of col-md-12 */}

                      {/*----------------------------------------------------------
                ------------------------------------------------------------- */}
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><br />   </div>
                 {/*----------------------------------------------------------
                ----------------------------------------------*/}
                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pdg_25 bkg_white ">
               
               <h3>Employment <span className="flt_rgt"><i className="fa fa-plus" /></span></h3>
               
                <h4>{this.props.name}</h4>
                {/* <h4>Dates Employed</h4> */}
                
                <h4>{this.props.provider_name}</h4>
                </div>{/* end of col-md-12 */}

                </div>{/* end of col-md-6 */}

               {/*------------------ end of left block---------------*/ }
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 ">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pdg_25 bkg_white address mt-20">
               
               <h3> Address <span className="flt_rgt"><i className="fa fa-plus" /></span></h3>
               {/* <h5>You have 3 addresses</h5>
               <h4>11923 N 123 Way</h4>
               <h4>Scottsdale, AZ 85259</h4>
               <h5>Primary address</h5> */}
                <Link to ="#">Manage All Addresses</Link>
                </div>{/* end of col-md-12 */}

                      {/*----------------------------------------------------------
                ------------------------------------------------------------- */}
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><br />   </div>
                 {/*----------------------------------------------------------
                ----------------------------------------------*/}
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pdg_25 bkg_white address">
               
               <h3> Email <span className="flt_rgt"><i className="fa fa-plus" /></span></h3>
               <h5>{this.props.email}</h5>
               <h4>Primary</h4>
               <p>To update an email address, you must have at least two email address on file.</p>
               </div>{/* end of col-md-12 */}

                      {/*----------------------------------------------------------
                ------------------------------------------------------------- */}
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><br />   </div>
                 {/*----------------------------------------------------------
                ----------------------------------------------*/}
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pdg_25 bkg_white address">
               
               <h3> Phone <span className="flt_rgt"><i className="fa fa-plus" /></span></h3>
               <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                   <div className="row">
                <h4>{this.props.phone}</h4>
                <h4>Mobile, Primary</h4>
               </div>{/* end of row */}
               </div>{/* end of col-md-8*/}
               <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
               <h4><Link to="#">Update | Remove</Link></h4>
               </div>{/* end of col-md-4 */}
              
               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"> <hr /></div>
               <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                   <div className="row">
                <h4>{this.props.phone}</h4>
                <h4>Mobile, Primary</h4>
               </div>{/* end of row */}
               </div>{/* end of col-md-8*/}
               <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
               <h4><Link to="#">Update | Remove</Link></h4>
               </div>{/* end of col-md-4 */}

               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                   <div className="row"><h4>Select update to manage communication preferances</h4>
                </div>
                   
               </div>
                </div>{/* end of col-md-12 */}
                 {/*----------------------------------------------------------
                ------------------------------------------------------------- */}
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><br />   </div>
                 {/*----------------------------------------------------------
                ----------------------------------------------*/}
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pdg_25  address">
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 icons_circle text-center">
                        <h1><i className="fa fa-cog"/></h1>
                        <h3>Settings</h3>
                    </div>{/* end of col-3 */}
                    <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 icons_resources ">
                    <ul>
                                <li>  <p><i className="fa fa-file"/> Terms of use</p></li>
                                <li>  <p><i className="fa fa-key"/> privacy policy</p></li>
                                <li>  <p><i className="fa fa-question-circle-o"/>help center</p></li>
                                <li>  <p><i className="fa fa-phone"/>contact us</p></li>
                            </ul>
                        </div>
               </div>{/* end of col-md-12 */}
                </div>{/* end of col-md-6 */}
                </div>{/* end of row */}
                </div>{/* end of col-12 */}


            </div> {/* end of container */}
        </div>
        );
    }
}

const mapStateToProps = state => ({
    about_business: state.form.about_business,
    country: state.form.country,
    email: state.form.email,
    name: state.form.name,
    phone: state.form.phone,
    privateKey: state.form.privateKey,
    provider_name: state.form.provider_name,
    provider_type: state.form.provider_type,
    publicKey: state.form.publicKey,
    website: state.form.website,
  });
  
  /**
   * define the dispatch actions
   * @param dispatch the actions to be dispatched
   */
  const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
      loginInfo: (about_business,country,email,name,phone,privateKey,provider_name,provider_type,publicKey,website) => dispatch({ type: "loginInfo", value:{about_business,country,email,name,phone,privateKey,provider_name,provider_type,publicKey,website} }),
    }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Profile);
