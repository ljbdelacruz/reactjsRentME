
import React from 'react';
import './dashboard.page.css'
import {Navbar1} from '../../components/sub-components/nav-bar1/nav-bar1.ui'
import {AdsDisplay1Sub} from '../../components/sub-components/ads-display1/ads-display1.sub'
import {getCategoryByParent} from '../../services/api.service'
import {RadioList1} from '../../components/radioButtons/radioList1/radioList1.ui'

class DashboardPage extends React.Component {
  constructor(props){
      super(props)
      this.state={
          searchbarPlaceholder:'Search Item....',
          category:[],
          selectedCategory:"bottom",
          options:[{ label: "Home", placement:"top", value:"home"}, { label: "Service", placement:"top", value:"service"}],
          ads:[
              {label:"Home", images:[{source:"http://localhost:8080/assets/images/gmail.png"},
                                     {source:"http://localhost:8080/assets/images/gmail.png"}]
              },
              {label:"Services", images:[{source:"http://localhost:8080/assets/images/gmail.png"},
                                     {source:"http://localhost:8080/assets/images/gmail.png"}]
              },
          ]
      }
      this.fetchCategory();
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

                    <RadioList1 items={this.state.options} onSelected={(value)=>{
                        console.log(value);
                    }}></RadioList1>


                    <div className="dashboard-ads-container">
                        <AdsDisplay1Sub items={this.state.ads} onClick={(item)=>{
                            console.log("CLICKED!");
                            console.log(item);
                            //view ad items information
                        }}></AdsDisplay1Sub>
                    </div>
                </div>
            </div>
        )
    }

    fetchCategory(){
        getCategoryByParent(0,function(data){
          this.setState({category:data});
        }.bind(this), function(err){
            console.log("ERROR!");
            // this.fetchCategory();
        }.bind(this))
    }
}
export default DashboardPage
