import React, {Component} from 'react';
import './loginInput1.sub.css'
//#region textfields imports
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
//#endregion
import Button from '@material-ui/core/Button';

export class LoginInput1 extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    render(){
        return (
            <div>
                <div className="container">
                    <div className="sub">
                        <TextField id="outlined-dense"
                                    label={this.props.unamePlaceholder}
                                    className={["textField", "dense"]}
                                    margin="dense"
                                    variant="outlined"
                                    onChange={(value)=>{
                                        this.setState({username:value.target.value})
                                    }}
                        />      
                        <TextField id="outlined-dense"
                                    label={this.props.passPlaceholder}
                                    className={["textField", "dense"]}
                                    margin="dense"
                                    variant="outlined"
                                    type="password"
                                    onChange={(value)=>{
                                        this.setState({password:value.target.value})
                                    }}
                        />      
                        <Button variant="contained" color="primary" className="login-button" onClick={()=>{
                            this.props.loginOnClick(this.state);
                        }}>LOGIN</Button>
                </div>
            </div>
    </div>
        )
    }
}