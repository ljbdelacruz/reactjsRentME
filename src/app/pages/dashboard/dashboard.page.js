
//#region modules
import React from 'react';
import './dashboard.page.css'
import {Navbar1} from '../../components/sub-components/nav-bar1/nav-bar1.ui'
import {AdsDisplay1Sub} from '../../components/sub-components/ads-display1/ads-display1.sub'
import {getCategoryByParent} from '../../services/api.service'
import {RadioList1} from '../../components/radioButtons/radioList1/radioList1.ui'
//#endregion
//#region models
var cmodel=require('../../viewModel/rentme/category.vm')
var amodel=require('../../viewModel/rentme/ads.vm')
//#endregion


class DashboardPage extends React.Component {
  constructor(props){
      super(props)
      this.state={
          searchbarPlaceholder:'Search Item....',
          category:[],
          selectedCategory:"bottom",
          options:[],
          ads:[
              {label:"Jojo's Crib", price:"$300", type:"per night", images:[{source:"http://localhost:8080/assets/images/gmail.png"},
                                     {source:"http://localhost:8080/assets/images/gmail.png"}]
              },
              {label:"Mamma Marias PS4 JB sadasdasdasdasdsadasdadsad", price:"$20", type:"per month", images:[{source:"http://localhost:8080/assets/images/gmail.png"},
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
                    <h5 style={{color:"black"}}>Vehicles</h5>
                    <div className="dashboard-ads-container">
                        <AdsDisplay1Sub items={this.state.ads} onClick={(item)=>{
                            //view ad items information
                        }}></AdsDisplay1Sub>
                    </div>
                    <h5 style={{color:"black"}}>Gadgets</h5>
                    <div className="dashboard-ads-container">
                        <AdsDisplay1Sub items={this.state.ads} onClick={(item)=>{
                            //view ad items information
                        }}></AdsDisplay1Sub>
                    </div>
                    <h5 style={{color:"black"}}>Services</h5>
                    <div className="dashboard-ads-container">
                        <AdsDisplay1Sub items={this.state.ads} onClick={(item)=>{
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
          for(var i=0;i<data.length; i++){
              var temp=new cmodel();
              temp.toParam(data[i].id, ""+data[i].id, "top", data[i].name)
              this.setState({
                options:this.state.options.concat(temp)
              })
          }
        }.bind(this), function(err){
            console.log("ERROR!");
            // this.fetchCategory();
        }.bind(this))
    }
    fetchAds(){
        
    }
}
export default DashboardPage
