'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function VideoComponent({ src, type, captionsSrc }) {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleError = () => {
      console.error('Video failed to load');
      setVideoError(true);
    };

    const handleCanPlay = () => {
      // Video is ready to play
      setVideoError(false);
    };

    video.addEventListener('error', handleError);
    video.addEventListener('canplay', handleCanPlay);

    // Timeout to detect if video takes too long to load
    const timeoutId = setTimeout(() => {
      if (video.readyState === 0) {
        setVideoError(true);
      }
    }, 5000);

    return () => {
      video.removeEventListener('error', handleError);
      video.removeEventListener('canplay', handleCanPlay);
      clearTimeout(timeoutId);
    };
  }, [src]);

  if (videoError) {
    return (
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/setup.jpg"
          alt="Developer setup"
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="z-[-1]"
        />
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      src={src}
      type={type}
      autoPlay
      muted
      loop
      playsInline
      controls={false}
      preload="metadata"
      className="absolute inset-0 w-full h-full object-cover z-[-1]"
      aria-label="Video player landing page video"
    >
      Your browser does not support the video tag.
    </video>
  );
}
