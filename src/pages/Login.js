import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
var apiBaseUrl = "http://localhost:4000/api/";

// import UploadPage from './UploadPage';
class Login extends Component {
  constructor(props){
    super(props);
    var localloginComponent=[];
    localloginComponent.push(
      <MuiThemeProvider key={"theme"}>
        <div>
           <RaisedButton label="Login with Google" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
       </div>
       </MuiThemeProvider>
    )
    this.state={
      menuValue:1,
      loginComponent:localloginComponent,
      loginRole:'student'
    }
  }
  componentWillMount(){
  // console.log("willmount prop values",this.props);
  if(this.props.role != undefined){
    if(this.props.role == 'student'){
      console.log("in student componentWillMount");
      var localloginComponent=[];
      localloginComponent.push(
        <MuiThemeProvider>
          <div>
           
             <RaisedButton label="Login with Google" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      )
      this.setState({menuValue:1,loginComponent:localloginComponent,loginRole:'student'})
    }
  }
  }
  handleClick(event){
    var self = this;
    var payload={
      "role":this.state.loginRole
    }
    axios.post(apiBaseUrl+'login', payload)
   .then(function (response) {
     console.log(response);
    //  if(response.data.code == 200){
    //    console.log("Login successfull");
    //    var uploadScreen=[];
    //    uploadScreen.push(<UploadPage appContext={self.props.appContext} role={self.state.loginRole}/>)
    //    self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
    //  }
     
   })
   .catch(function (error) {
     console.log(error);
   });
  }
  handleMenuChange(value){
    console.log("menuvalue",value);
    var loginRole;
    if(value==1 || value==2){
      var localloginComponent=[];
      loginRole='User';
      localloginComponent.push(
        <MuiThemeProvider>
          <div>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      )
    }
   
    this.setState({menuValue:value,
                   loginComponent:localloginComponent,
                   loginRole:loginRole})
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
        <AppBar
             title="Login"
           />
        </MuiThemeProvider>
        <MuiThemeProvider>
        <div>
        <p>Login as:</p>
        <DropDownMenu value={this.state.menuValue} onChange={(event,index,value)=>this.handleMenuChange(value)}>
          <MenuItem value={1} primaryText="User" />
          <MenuItem value={2} primaryText="User" />
        </DropDownMenu>
        </div>
        </MuiThemeProvider>
        {this.state.loginComponent}
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default Login;
