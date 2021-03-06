// import React, { Component } from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import RaisedButton from 'material-ui/RaisedButton';

// import Login from './Login';
// import Register from './Register';

// const style = {
//   margin: 15,
// };

// class Loginscreen extends Component {
//   constructor(props){
//     super(props);
//     var loginButtons=[];
//     loginButtons.push(
//       <div key={"Login-Div"}>
//       <MuiThemeProvider>
//         <div>
//            <RaisedButton label={"Register with Google"} primary={true} style={style} onClick={(event) => this.handleClick(event,'student')}/>
//        </div>
//        </MuiThemeProvider>
       
//       </div>
//     )
//     this.state={

//       loginButtons:loginButtons,
//       isLogin:true
//     }
//   }
//   componentWillMount(){
//     var loginscreen=[];
//     loginscreen.push(<Login parentContext={this} appContext={this.props.appContext} key={"LoginScreen"}/>);
//     var loginmessage = "Not registered yet, Register Now";
//     this.setState({
//                   loginscreen:loginscreen,
//                   loginmessage:loginmessage
//                     })
//   }
//   handleClick(event,userRole){
//     console.log("event",userRole);
//     var loginmessage;
//     if(this.state.isLogin){
//       let loginscreen=[];
//       loginscreen.push(<Register parentContext={this} appContext={this.props.appContext} role={userRole}/>);
//       loginmessage = "Already registered.Go to Login";
//       let loginButtons=[];
//       loginButtons.push(
//         <div key="login-button">
//         <MuiThemeProvider>
//           <div>
//              <RaisedButton label={"Login"} primary={true} style={style} onClick={(event) => this.handleClick(event,userRole)}/>
//          </div>
//          </MuiThemeProvider>
//         </div>
//       )
//       this.setState({
//                      loginscreen:loginscreen,
//                      loginmessage:loginmessage,
//                      loginButtons:loginButtons,
//                      isLogin:false
//                    })
//     }
    
//   }
//   render() {
//     return (
//       <div className="loginscreen" key="loginscreen">
//         {this.state.loginscreen}
//         <div>
//           {this.state.loginmessage}
//           {this.state.loginButtons}
//         </div>
//       </div>
//     );
//   }
// }


// export default Loginscreen;

import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './App.css';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

const App = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Click to Sign Up</h1>
      <ExampleToast>
        You are now Signing in...
        <span role="img" aria-label="tada">
          ????
        </span>
      </ExampleToast>
    </Jumbotron>
  </Container>
);

export default App;
