import React from 'react';
import strawberry from '../images/strawberry.png'


// You can then call the parent play/pause methods from your child component.
class Strawberry extends React.Component {
    render(){
      return(
        <div>
          <div type="button" id='playButton' onClick={this.props.playVideo}>
<img src={strawberry} alt="apple-button" height={350}></img>
          </div>
          <div type="button" id='pauseButton' onClick={this.props.pauseVideo}></div>
        </div>
      );
    }
  }
  
  export default Strawberry