import React, {Component} from 'react';
import './nav-bar.ui.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import {SearchIcon1} from '../../icons/search1/search1.icon'
import {MenuIcon1} from '../../icons/menu1/menu1.icon'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';

//#region icons
import {UserIcon1} from '../../../components/icons/user1/user1.icon'
//#endregion

export class Navbar1 extends Component {
    constructor(props){
        super(props);
        this.state={
            searchText:'',
            open:false
        }
    }
    render(){
        return (
            <div className="navbar1-container">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className="navbar1-menubutton" color="inherit" aria-label="menu" onClick={()=>{
                            this.setState({open:!this.state.open});
                        }}>
                            <MenuIcon1 />
                        </IconButton>
                        <TextField id="outlined-dense"
                                        color="primary"
                                        label={this.props.placeholder}
                                        className={["navbar1-textField"]}
                                        style={{flex:1, borderColor:"yellow"}}
                                        margin="dense"
                                        variant="outlined"
                                        onChange={(value)=>{
                                            this.setState({searchText:value.target.value})
                                        }}
                        />                        
                        <IconButton edge="start" className="navbar1-searchbutton" color="inherit" aria-label="menu" onClick={()=>{
                            this.props.searchOnClick(this.state);
                        }}>
                            <SearchIcon1 />
                        </IconButton>
                    </Toolbar>
                    {   this.state.open ? (
                                <Paper className="navbar1-paper">
                                    <Button onClick={()=>{
                                        console.log("Switch to host")
                                    }}>
                                        <UserIcon1 />
                                        <span>Switch To Host</span>
                                    </Button>
                                    <Button onClick={()=>{
                                        console.log("Settings")
                                    }}>
                                        <UserIcon1 />
                                        <span>Settings</span>
                                    </Button>
                                    <Button onClick={()=>{
                                        console.log("Logout")
                                    }}>
                                        <UserIcon1 />
                                        <span>Logout</span>
                                    </Button>
                                </Paper>
                        ) : null
                    }

                </AppBar>
            </div>
        )
    }
}