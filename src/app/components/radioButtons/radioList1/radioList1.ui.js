import React, { Component } from 'react';
import './radiosList.ui.css';
//#region radio
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
//#endregion

export class RadioList1 extends Component {
  constructor(props){
      super(props)
      this.state={
          selectedValue:""
      }
  }
  render() {
    // You can use them as regular CSS styles
    return (
        <div>
            <RadioGroup aria-label="position" name="position" value={this.state.selectedValue} onChange={(value)=>{
                this.setState({selectedValue:value.target.value});
                this.props.onSelected(value.target.value);
            }} row>
                {this.props.items.map(item => {
                    return(<FormControlLabel
                        className="dashboard-radio-text"
                        value={item.value}
                        control={<Radio color="primary" />}
                        label={item.label}
                        labelPlacement={item.placement}
                    />)
                })}
                </RadioGroup>
        </div>
    );
  }
}