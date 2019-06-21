import * as React from 'react';
import {Route} from 'react-router-dom';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";

class App extends React.Component {
  public render() {
    return (
    <div className="App">
    <Header/> 
    <Route path='/login' exact component={Login}/>
    <Route path='/signup' exact component={Signup}/>
    <Footer/> 
    </div>
    );
  }
}

export default App;
