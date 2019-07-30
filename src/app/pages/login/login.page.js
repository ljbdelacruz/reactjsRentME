
import React from 'react';
import Button from '@material-ui/core/Button';
//#region textfields imports
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
//#endregion
import './login.page.css'
import {LoginInput1} from '../../components/sub-components/logininput1/logininput1.sub'

class LoginPage extends React.Component {
    constructor(props){
        super(props)
        this.state={
            username:"Username",
            password:"Password",
        }
    }
    render(){
          return (
            <div>
                <div className="login-ui-container">
                    <LoginInput1 unamePlaceholder={this.state.username} passPlaceholder={this.state.password} loginOnClick={(data)=>{
                        //auth here
                        console.log(data);
                        //navigate to dashboard if auth success
                        this.props.history.push('/dashboard');
                    }} ></LoginInput1>
                </div>
            </div>
          )
    }
  }
  export default LoginPage