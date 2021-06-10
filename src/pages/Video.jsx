import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class Video extends Component {
    render () {
        const {path} = this.props;
        return (
        <div className='player-wrapper'>
            <ReactPlayer
                className='react-player fixed-bottom'
                url={path}
                width='100%'
                height='100%'
                controls = {true}

            />
        </div>
        )
    }
}

export default Video;