import Apple from './Apple.js'
import React from "react";
import ReactPlayer from 'react-player'
import apple_v from '../video/apple_v.mp4'
import grape from '../video/grape.mp4'
import orange from '../video/orange.mp4'
import strawberry from '../video/strawberry.mp4'
import banana from '../video/banana.mp4'

import "../style/video.css";
import Banana from './Banana.js'
import Cherry from './Orange.js'
import Grape from './Grape.js'
import Strawberry from './Strawberry.js'


class Home extends React.Component {
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
      <Apple playVideo={this.playVideo.bind(this)} 
                 pauseVideo={this.pauseVideo.bind(this)} />
</div>
<div >
      <Banana playVideo={this.playVideo.bind(this)} 
                 pauseVideo={this.pauseVideo.bind(this)} />
</div>
<div >
      <Cherry playVideo={this.playVideo.bind(this)} 
                 pauseVideo={this.pauseVideo.bind(this)} />
</div>
<div >
      <Grape playVideo={this.playVideo.bind(this)} 
                 pauseVideo={this.pauseVideo.bind(this)} />
</div>
<div >
      <Strawberry playVideo={this.playVideo.bind(this)} 
                 pauseVideo={this.pauseVideo.bind(this)} />
</div>
</div>
<div className='column'>

<div>
<ReactPlayer url={apple_v}  
        pip={true}
        ref='vidRef' 
        playing={this.state.playingVideo}
>

</ReactPlayer>
</div>

<div>
<ReactPlayer url={banana}  
        pip={true}
        ref='vidRef' 
        playing={this.state.playingVideo}
>

</ReactPlayer>
</div>

<div>
<ReactPlayer url={grape}  
        pip={true}
        ref='vidRef' 
        playing={this.state.playingVideo}
>

</ReactPlayer>
</div>

<div>
<ReactPlayer url={orange}  
        pip={true}
        ref='vidRef' 
        playing={this.state.playingVideo}
>

</ReactPlayer>
</div>

<div>
<ReactPlayer url={strawberry}  
        pip={true}
        ref='vidRef' 
        playing={this.state.playingVideo}
>

</ReactPlayer>
</div>
 </div>
 </div>

{
  //banana
}
 </div>
</center>
    );
  }
}

export default Home