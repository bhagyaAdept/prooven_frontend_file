import * as React from 'react';
import {Route} from 'react-router-dom';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Dashboard from "./pages/dashboard/dashBoard";
import MyTranscript from "./pages/myTranscript/myTranscript";
import Users from "./pages/users/users";
import Security from "./pages/security/security";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";

class App extends React.Component {
  public render() {
    return (
    <div className="App">
    <Header/> 
    <Route path='/login' exact component={Login}/>
    <Route path='/dashboard' exact component={Dashboard}/>
    <Route path='/myTranscript' exact component={MyTranscript}/>
    <Route path='/users' exact component={Users}/>
    <Route path='/security' exact component={Security}/>
    <Route path='/signup' exact component={Signup}/>
    <Footer/> 
    </div>
    );
  }
}

export default App;
