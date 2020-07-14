import React, {Component} from 'react'
import { Player } from 'video-react';
import "./Video.css"
// import '~video-react/dist/video-react.css';

    
class Video extends Component{
    constructor() {
        super()
        this.state = {
            message: ''
        }
    }
   
    displayVideo() {
        this.setState({
           message: 
        <div className='player-wrapper'> <Player>
        <source src="Video.mp4" />
      </Player></div>})
    }
    // deleteComponent() {
    //     this.setState({
    //          false
    //     })
    // }

    render() {
        return(
            <div>
               <button className="btn btn-primary" onClick={() => this.displayVideo()}>Video</button> 
                <div>{this.state.message}</div>
            </div>
        )
    }
}

export default Video;