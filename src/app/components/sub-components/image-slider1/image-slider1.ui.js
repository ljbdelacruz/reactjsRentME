import React, {Component} from 'react';
import { Slide } from 'react-slideshow-image';
import './image-slider1.css'

export class ImageSlider1 extends Component {
    constructor(props){
        super(props);
        this.properties = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: true,
            onChange: (oldIndex, newIndex) => {
              this.props.onSwipeChange(oldIndex, newIndex)
            }
        }
    }
    render(){
        return(
        <div >
            <div >
                <div className="image-slider1-container">

                <Slide {...this.properties}>
                    {this.props.images.map(image => {
                            return (
                                <div className="each-slide">
                                    <img src={image.source} style={{width:200, height:200}}/>
                                </div>
                            );
                    })}
                </Slide>
                </div>
            </div>
        </div>
        )
    }
}