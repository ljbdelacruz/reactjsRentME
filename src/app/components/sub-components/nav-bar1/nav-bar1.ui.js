import React, {Component} from 'react';
import './nav-bar.ui.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import {SearchIcon1} from '../../icons/search1/search1.icon'
import {MenuIcon1} from '../../icons/menu1/menu1.icon'
import IconButton from '@material-ui/core/IconButton';

export class Navbar1 extends Component {
    constructor(props){
        super(props);
        this.state={
            searchText:'',
        }
    }
    render(){
        return (
            <div className="navbar1-container">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className="navbar1-menubutton" color="inherit" aria-label="menu" onClick={()=>{
                            this.props.menuOnClick();
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
                </AppBar>
            </div>
        )
    }
}