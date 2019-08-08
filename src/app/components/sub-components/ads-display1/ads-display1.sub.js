import React, {Component} from 'react';
import './ads-display1.css'
import {ImageSlider1} from '../image-slider1/image-slider1.ui'
import HorizontalScroll from 'react-scroll-horizontal'




export class AdsDisplay1Sub extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        return (
            <div>
                <div className="ads-display-scontainer">
                    <div className="ads-display1-scrollbar">                        
                        <HorizontalScroll>  
                            {this.props.items.map(item => {
                                return(
                                <div className="ads-display-container" onClick={()=>{
                                    this.props.onClick(item);
                                }}>
                                    <p className="ads-display1-price">{item.price} <span className="ads-display1-type">{item.type}</span></p>
                                    <div className="ads-display-image">
                                        <ImageSlider1 images={item.images} onSwipeChange={(oIndex, nIndex)=>{
                                        }}></ImageSlider1>
                                    </div>
                                    <p className="ads-display1-text">{item.label}</p>
                                    {/* <p className="ads-display1-price">{item.price} <span className="ads-display1-type">{item.type}</span></p> */}
                                </div>)
                            })}
                        </HorizontalScroll>
                    </div>
                </div>

            </div>
        )
    }
}