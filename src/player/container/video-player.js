import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'

import Video from '../components/video'
import Title from '../components/title'
import FullScreen from '../components/full-screen'
import PlayPause from '../../player/components/play-pause'
import Timer from '../components/timer.js'
import Controls from '../components/video-player-controls.js'
import Spinner from '../components/spinner'
import formattedTime from '../../libs/utilities'
import ProgressBar from '../components/progress-bar'
import Volume from '../components/volume.js'
import FullScreenJs from '../../libs/full-screen'
class VideoPlayer extends Component {
    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        durationFloat: 0,
        timeFloat: 0,
        loading: false,
        volume: 1,
        lastVolume: 1,
        mute:false
    }
    togglePlay = (event) => {
        this.setState({
            pause: !this.state.pause
        })

    }
    componentDidMount() {
        this.setState({
            pause: (!this.props.autoplay)
        })
    }

    handleLoadedMetadata = event => {
        this.video = event.target
        console.log(event)
        this.setState({
            duration: formattedTime(this.video.duration),
            durationFloat: this.video.duration
        })
    }
    handleTimeUpdate =event =>{
        this.setState({
            currentTime: formattedTime(this.video.currentTime),
            timeFloat: this.video.currentTime
        })
    }
    handleProgressChange = event => {
        //event.target.value
        this.video.currentTime= event.target.value 
    }

    handleSeeking = event =>{
        this.setState({
            loading: true
        })
    }

    handleSeeked = event =>{
        this.setState({
            loading: false
        })
    }
    handleReady = event =>{
        this.setState({
            loading:false
        })
    }
    handleVolumeChange = event => {
        this.video.volume = event.target.value
        this.setState({
            volume: this.video.volume
        })
    }
    handleVolumeClick = event => {
        if (this.state.mute === false){
            this.setState({
                lastVolume: this.video.volume
            })
            this.video.volume = 0
            this.setState({
                volume: 0,
                mute: true
            })
            console.log(this.state.lastVolume)
        }else {
            this.video.volume = this.state.lastVolume
            this.setState({
                volume: this.video.volume,
                mute: false
            })
        }
    }
    handleFullScreenClick = event =>{
        if (
            document.fullscreenEnabled ||
            document.webkitFullscreenEnabled ||
            document.mozFullScreenEnabled ||
            document.msFullscreenEnabled
        ) {
            if (this.player.requestFullscreen) {
                this.player.requestFullscreen();
            } else if (this.player.webkitRequestFullscreen) {
                this.player.webkitRequestFullscreen();
            } else if (this.player.mozRequestFullScreen) {
                this.player.mozRequestFullScreen();
            } else if (this.player.msRequestFullscreen) {
                this.player.msRequestFullscreen();
            }

    }

        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
}
    setRef= element => {
        this.player = element
    }
    render() {
        return (
            <VideoPlayerLayout setRef={this.setRef}>
            <Title title={this.props.title} />
            
            <Controls>
                <PlayPause pause={this.state.pause} handleClick={this.togglePlay} />
                <Timer currentTime = {this.state.currentTime} duration ={this.state.duration} />
                    <ProgressBar duration={this.state.durationFloat} value={this.state.timeFloat} handleProgressChange={this.handleProgressChange}/>
                    <Volume handleVolumeChange={this.handleVolumeChange} handleVolumeClick={this.handleVolumeClick} volume={this.state.volume}/>
                    <FullScreen handleFullScreenClick={this.handleFullScreenClick}/>
            </Controls>
            <Spinner active={this.state.loading} />
            <Video
                autoplay={this.props.autoplay}
                handleLoadedMetadata={this.handleLoadedMetadata}
                pause={this.state.pause}
                handleTimeUpdate={this.handleTimeUpdate}
                handleSeeking={this.handleSeeking} 
                handleSeeked={this.handleSeeked}
                handleReady= {this.handleReady}
                src={this.props.src}>
            </Video>
            </VideoPlayerLayout>
        )
    }
}
export default VideoPlayer