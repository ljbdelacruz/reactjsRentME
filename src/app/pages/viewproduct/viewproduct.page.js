import React from 'react';
import './viewproduct.page.css'
import {ImageSlider1} from '../../components/sub-components/image-slider1/image-slider1.ui'

class ViewProductPage extends React.Component {
    constructor(props){
        super(props)
        this.state={
          itemInfo:{}
        }
    }
    render(){
          return (
            <div>
              <ImageSlider1 images={this.itemInfo.images} onSwipeChange={(oIndex, nIndex)=>{
                                
              }}></ImageSlider1>
            </div>
          )
    }
  }
  export default ViewProductPage