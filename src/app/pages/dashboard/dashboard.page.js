
import React from 'react';
import './dashboard.page.css'
import {Navbar1} from '../../components/sub-components/nav-bar1/nav-bar1.ui'
import {AdsDisplay1Sub} from '../../components/sub-components/ads-display1/ads-display1.sub'


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
                    <div className="dashboard-ads-container">
                        <AdsDisplay1Sub></AdsDisplay1Sub>
                    </div>
                </div>
            </div>
        )
    }
}
export default DashboardPage
