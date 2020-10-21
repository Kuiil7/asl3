import React from 'react';
import apple from '../images/apple.png'


// You can then call the parent play/pause methods from your child component.
class Apple extends React.Component {
    render(){
      return(
        <div>
          <div type="button" id='playButton' onClick={this.props.playVideo}>
<img src={apple} alt="apple-button" height={350}></img>
          </div>
          <div type="button" id='pauseButton' onClick={this.props.pauseVideo}></div>
        </div>
      );
    }
  }
  
  export default Apple