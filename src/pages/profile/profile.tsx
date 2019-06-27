import * as  React from 'react';
import axios from "../../axios";
import { Link } from 'react-router-dom';
import QR from '../images/QR.png';
import '../css/main.css';

class Profile extends React.Component {

    public componentDidMount() {
        axios.post(`https://us-central1-prooven1-3a324.cloudfunctions.net/createScream`)
            .then(res => {
                console.log(res);
            });
    }

    public render() {

        return (
            <div className="body_offwhite">
            <div className="container my_container">
                           
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 "> <h1>Profile</h1>  <br /><br /></div>                 

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                <div className="row">
            {/*---------------------start left block--------------- */}
                <div className="col-lg-6 col-md-5 col-md-5 col-sm-12 col-xs-12">


                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pdg_25 bkg_white">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 user-image text-center ">
               <h1> <i className = "fa fa-user-circle-o"/></h1>
                <h4 className=""><Link to="">Upload Photo</Link></h4>
                </div> {/* col-4 */}
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 user-image ">
                    <br />
                    <h3>Nick Radachi</h3>
                    <h5>Joined in 2014</h5>
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
               <p>0x12345graty6jybghjkj88</p>

               <p>0x12345graebghjkj56787</p>
               </div>
                
                </div>{/* end of col-md-12 */}

                      {/*----------------------------------------------------------
                ------------------------------------------------------------- */}
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><br />   </div>
                 {/*----------------------------------------------------------
                ----------------------------------------------*/}
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pdg_25 bkg_white ">
               
               <h3>Education <span className="flt_rgt"><i className="fa fa-plus" /></span></h3>
               
                <h4>Univercity of arizona </h4><h4>2014</h4>
                
                <h4>Nuteritional Sciences</h4>
                </div>{/* end of col-md-12 */}

                      {/*----------------------------------------------------------
                ------------------------------------------------------------- */}
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><br />   </div>
                 {/*----------------------------------------------------------
                ----------------------------------------------*/}
                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pdg_25 bkg_white ">
               
               <h3>Employment <span className="flt_rgt"><i className="fa fa-plus" /></span></h3>
               
                <h4>Employer 1</h4>
                <h4>Dates Employed</h4>
                
                <h4>Roles</h4>
                </div>{/* end of col-md-12 */}

                </div>{/* end of col-md-6 */}

               {/*------------------ end of left block---------------*/ }
                <div className="col-lg-6 col-md-6 col-md-6 col-sm-12 col-xs-12 ">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pdg_25 bkg_white address mt-20">
               
               <h3> Address <span className="flt_rgt"><i className="fa fa-plus" /></span></h3>
               <h5>You have 3 addresses</h5>
               <h4>11923 N 123 Way</h4>
               <h4>Scottsdale, AZ 85259</h4>
               <h5>Primary address</h5>
                <Link to ="#">Manage All Addresses</Link>
                </div>{/* end of col-md-12 */}

                      {/*----------------------------------------------------------
                ------------------------------------------------------------- */}
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><br />   </div>
                 {/*----------------------------------------------------------
                ----------------------------------------------*/}
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pdg_25 bkg_white address">
               
               <h3> Email <span className="flt_rgt"><i className="fa fa-plus" /></span></h3>
               <h5>nradachi@gmail.com</h5>
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
                <h4>(4**)***-2939</h4>
                <h4>Mobile, Primary</h4>
               </div>{/* end of row */}
               </div>{/* end of col-md-8*/}
               <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
               <h4><Link to="#">Update | Remove</Link></h4>
               </div>{/* end of col-md-4 */}
              
               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"> <hr /></div>
               <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                   <div className="row">
                <h4>(4**)***-2939</h4>
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

export default Profile;
