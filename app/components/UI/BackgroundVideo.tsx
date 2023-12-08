'use client'

import { useRef, useEffect } from 'react';

const BackgroundVideo = ({ videoSource, classname }:any) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error: any) => {
        // Handle the video play error (autoplay policies, etc.)
        console.error('Video playback failed:', error);
      });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src={videoSource}
      autoPlay
      muted
      loop
      playsInline
      className={classname}
    />
  );
};

export default BackgroundVideo;