import Buttons from '../components/Buttons.js'
import React from "react";
import ReactPlayer from 'react-player'
import apple_v from '../video/apple_v.mp4'
import "../style/video.css";

class Video extends React.Component {
  state = {
    'playingVideo': false
  }
  playVideo() {
    // You can use the play method as normal on your video ref
    // debugger;
    this.setState({'playingVideo':true})
    //this.refs.vidRef.getInternalPlayer().playVideo()
  }
  
  pauseVideo() {
    // Pause as well
    this.vidRef.getInternalPlayer().pauseVideo()
  }
  
  // You can pass your function references to your child components as props (here passing down to the Buttons component)
  render() {

    return(

      <center>
      <div className='wrapper'>
      <div className='row'>
      <div className='column'>

      <div >
      <Buttons playVideo={this.playVideo.bind(this)} 
                 pauseVideo={this.pauseVideo.bind(this)} />
</div>
</div>
<div className='column'>


<ReactPlayer url={apple_v}
        
        pip={true}
        ref='vidRef' 
        playing={this.state.playingVideo}
>


</ReactPlayer>
 </div>
 </div>
 </div>
</center>
    );
  }
}

export default Video