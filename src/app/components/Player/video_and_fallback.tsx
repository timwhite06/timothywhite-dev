"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

type VideoComponentProps = {
  src: string;
  type?: string;
  captionsSrc?: string;
};

export default function VideoComponent({
  src,
  type,
  captionsSrc,
}: VideoComponentProps) {
  const [videoError, setVideoError] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleError = () => {
      setVideoError(true);
    };

    const handleCanPlay = () => {
      setVideoError(false);
    };

    video.addEventListener("error", handleError);
    video.addEventListener("canplay", handleCanPlay);

    const timeoutId = setTimeout(() => {
      if (video.readyState === 0) {
        setVideoError(true);
      }
    }, 5000);

    return () => {
      video.removeEventListener("error", handleError);
      video.removeEventListener("canplay", handleCanPlay);
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
          style={{ objectFit: "cover" }}
          priority
          className="z-[-1]"
        />
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      controls={false}
      preload="metadata"
      className="absolute inset-0 w-full h-full object-cover z-[-1]"
      aria-label="Video player landing page video"
    >
      <source src={src} type={type} />
      {captionsSrc ? <track src={captionsSrc} kind="captions" /> : null}
      Your browser does not support the video tag.
    </video>
  );
}
