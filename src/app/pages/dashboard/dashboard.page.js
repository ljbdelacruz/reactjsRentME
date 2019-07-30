
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './dashboard.page.css'
//#region icons
import {SearchIcon1} from '../../components/icons/search1/search1.icon'
//#endregion
import {Navbar1} from '../../components/sub-components/nav-bar1/nav-bar1.ui'
class DashboardPage extends React.Component {
  constructor(props){
      super(props)
      this.state={
          searchbarPlaceholder:'Search Item....',
      }
  }
    render(){
        return (
            <div className="dashboard-body">
                <div>
                    <Navbar1 placeholder={this.state.searchbarPlaceholder} searchOnClick={(data)=>{
                        console.log(data);
                        //search on click
                    }} menuOnClick={()=>{
                        //menu on click
                    }}></Navbar1>
                </div>
            </div>
        )
    }
}
export default DashboardPage
