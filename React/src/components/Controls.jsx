import React from 'react';
import RectangleButton from './RectangleButton.jsx';
import CircleButton from './CircleButton.jsx';
import ProgressBar from './ProgressBar.jsx';

export default class Controls extends React.Component {
   render() {
      return <div>
               <div className="row">
                  <div className="col-xs-12">
                     <ProgressBar value={this.props.value} onChange={this.props.timeUpdate} max={this.props.len}/>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xs-3 col-md-1 col-lg-3">
                  </div>
                  <div className="col-xs-2 col-md-3 col-lg-2" style={{marginRight:'25px'}}>
                     <RectangleButton type="button" id="previous" name="skip_previous" click={this.props.previousClick} />
                  </div>
                  <div className="col-xs-2 col-md-3 col-lg-2">
                     <CircleButton type="button" id="play" name="play_arrow" click={this.props.playClick} />
                  </div>
                  <div className="col-xs-2 col-md-3 col-lg-2" >
                     <RectangleButton type="button" id="next" name="skip_next" click={this.props.nextClick} />
                  </div>
                  <div className="col-xs-3 col-md-1 col-lg-3">
                  </div>
               </div>
            </div>
   }
}
