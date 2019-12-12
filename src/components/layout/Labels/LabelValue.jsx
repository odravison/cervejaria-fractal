import React from 'react';
import './LabelValue.scss';

class LabelValue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    
    const labelClass = "LabelContent row";
    const valueClass = "ValueContent row";

    const { value, label } = this.props;


    return (
      <div>
        <div className={labelClass}>
          <b>{label}</b>
        </div>
        <div className={valueClass}>
          {value}
        </div>
      </div>
    );
  }
}
 
export default LabelValue;