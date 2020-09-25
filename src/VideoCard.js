import React, { useState, useRef } from 'react'
import './VideoCard.css'
import VideoHeader from './VideoHeader'
import VideoFooter from './VideoFooter'

function VideoCard({url, likes, shares, channel, avatarSrc , song}) {
    // useState
    // useRef (both hook to play video when click)
    const [isVideoPlaying, setIsVideoPlaying] =
        useState(false);
    const videoRef = useRef(null);


    const onVideoPress = () => {
        if (isVideoPlaying) {
            //stop video
            videoRef.current.pause();
            setIsVideoPlaying(false)
        }
        else {
            //play
            videoRef.current.play();
            setIsVideoPlaying(true)
        }
    }

    return (
        <div className='videoCard'>
            <VideoHeader />
            <video
                ref={videoRef}
                onClick={onVideoPress}
                className="videoCard__player"
                src={url}
                alt='IG reel video'
                loop
            />
            <VideoFooter
                channel={channel}
                likes={likes}
                shares={shares}
                avatarSrc={avatarSrc}
                song={song}
            />
        </div>
    )
}

export default VideoCard
