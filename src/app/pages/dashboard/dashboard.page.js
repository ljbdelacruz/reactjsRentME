
import React from 'react';
import Button from '@material-ui/core/Button';
//#region textfields imports
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
//#endregion
import './dashboard.page.css'
//#region icons
import {SearchIcon1} from '../../components/icons/search1/search1.icon'
//#endregion

class DashboardPage extends React.Component {
  constructor(props){
      super(props)
      this.state={
          search:'',
      }
  }
    render(){
        return (
            <div className="dashboard-body">
                <div style={{width:"80%", marginLeft:"10%"}}>
                    <div className="dashboard-container">
                        <TextField id="outlined-dense"
                                    color="secondary"
                                    label="Search Item to Rent"
                                    className={["textField", "dense", "my-searchbox"]}
                                    style={{flex:1, borderColor:"yellow"}}
                                    margin="dense"
                                    variant="outlined"
                                    onChange={(value)=>{
                                        this.setState({search:value.target.value})
                                    }}
                        />
                        <Button color="primary" className="fab" onClick={()=>{
                            console.log(this.state.search);
                        }}>
                            <SearchIcon1 />
                        </Button>
    
                    </div>
                </div>
            </div>
        )
    }
}
export default DashboardPage
