import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class Video extends Component {
    render () {
        return (
        <div className='player-wrapper'>
            <ReactPlayer
                className='react-player fixed-bottom'
                url= 'video/adamite-install.mov'
                width='100%'
                height='100%'
                controls = {true}

            />
        </div>
        )
    }
}

export default Video;