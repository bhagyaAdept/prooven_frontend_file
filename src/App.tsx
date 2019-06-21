import * as React from 'react';
import {Route} from 'react-router-dom';
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";

class App extends React.Component {
  public render() {
    return (
    <div className="App">
    <Route path='/login' exact component={Login}/>
      <Route path='/signup' exact component={Signup}/>
    </div>
    );
  }
}

export default App;
