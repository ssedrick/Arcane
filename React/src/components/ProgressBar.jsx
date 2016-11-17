import React from 'react';
import Slider from 'material-ui/Slider';

export default class ProgressBar extends React.Component {
   render() {
      return (<Slider onChange={this.props.onChange} value={this.props.value} max={this.props.max} />);
   }
}
