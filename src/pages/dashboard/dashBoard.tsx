import * as React from 'react';
import '../css/main.css';

    
class Dashboard extends React.Component {

    public render() {
        return (
            <div className="dashboard-cl">
                <div className="container">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                <h3>Good Morning, John</h3>
                </div>{/* end of col-6 */}

                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 profile-cl">
                    <div className="profileimg-cl">                        
                    <i className = "fa fa-user-circle-o"/> 
                    <h3>Profile</h3>    
                    </div>            
                </div>{/* end of col-2 */}
                <br /> <br />
                </div>{/* end of col-12 */} 
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                   
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle">
                        <h1><i className="fa fa-file-text-o"/></h1>
                        <h3>Transcripts</h3>
                    </div>{/* end of col-3 */}

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle">
                        <h1><i className="fa fa-envelope-o"/></h1>
                        <h3>Request Inbox</h3>
                    </div>{/* end of col-3 */}

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle">
                        <h1><i className="fa fa-users"/></h1>
                        <h3>users</h3>
                    </div>{/* end of col-3 */}

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle">
                        <h1><i className="fa fa-home"/></h1>
                        <h3>marketplace</h3>
                    </div>{/* end of col-3 */}

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle">
                        <h1><i className="fa fa-line-chart"/></h1>
                        <h3>analytics</h3>
                    </div>{/* end of col-3 */}

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle">
                        <h1><i className="fa fa-bell-o "/><span className="icon_circle_alert">1</span></h1>
                        <h3>alrets</h3>
                    </div>{/* end of col-3 */}

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle">
                        <h1><i className="fa fa-shield"/></h1>
                        <h3>security</h3>
                    </div>{/* end of col-3 */}

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle">
                        <h1><i className="fa fa-user"/></h1>
                        <h3>contacts</h3>
                    </div>{/* end of col-3 */}
                     
                </div>{/* end of col-12 */} 
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 recent_activity">
                    <h2>Recent Activity <span><i className="fa fa-arrow-right"/></span></h2>
                   
                    <table className="table">                                    
                                    <tbody>
                                        <tr>
                                            <td className="activity_date">May 23</td>
                                            <td><span className="activity_heading">SQU*SQ *Press scottsda</span><p><span className="activity_pending">pending</span> Authorization</p></td>
                                            <td>- $ 2.70</td>
                                        </tr>
                                        <tr>
                                        <td className="activity_date">May 21</td>
                                        <td><span className="activity_heading">chevron/bro re</span><p> payment - paypal cash card</p></td>
                                            <td ><h5 className="profit">+ $ 15.00 </h5></td>
                                        </tr>
                                        <tr>
                                        <td className="activity_date">May 19</td>
                                        <td><span className="activity_heading">wizent ach</span><p> direct deposit</p></td>
                                        <td>- $ 2.70</td>
                                        </tr>
                                        <tr>
                                        <td className="activity_date">May 21</td>
                                        <td><span className="activity_heading">chevron/bro re</span><p> payment - paypal cash card</p></td>
                                        <td>- $ 2.70</td>
                                        </tr>
                                        <tr>
                                        <td className="activity_date">May 21</td>
                                        <td><span className="activity_heading">chevron/bro re</span><p> payment - paypal cash card</p></td>
                                        <td>- $ 2.70</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button className="btn my_btn">See more activity</button>
                </div> {/* end of col-6 */}
                </div> {/* end of col-12 */}
                </div> {/* end of container */} 
            </div>
        );
    }
}

export default Dashboard;
