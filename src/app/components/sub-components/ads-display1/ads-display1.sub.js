import React, {Component} from 'react';
import './ads-display1.css'
import {ImageSlider1} from '../image-slider1/image-slider1.ui'


export class AdsDisplay1Sub extends Component {
    constructor(props){
        super(props);
        this.state={
            images:[
                {source:"http://localhost:8080/assets/images/gmail.png"},
                {source:"http://localhost:8080/assets/images/gmail.png"}
            ]  
        }
    }
    render(){
        return (
            <div>
                <div className="ads-display-container">
                    <div className="ads-display-image">
                        <ImageSlider1 images={this.state.images} onSwipeChange={(oIndex, nIndex)=>{
                            console.log(oIndex+" "+nIndex);
                        }}></ImageSlider1>
                    </div>
                    <h4 style={{textAlign:"center"}}>Hello World</h4>
                </div>
            </div>
        )
    }
}