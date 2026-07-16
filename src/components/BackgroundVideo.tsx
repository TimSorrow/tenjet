"use client";

import React, { useState, useEffect, useRef } from "react";

export const BackgroundVideo = () => {
  const videos = [
    "/videos/jet-ski-compressed.mp4",
    "/videos/JetSkiCarvingCircleWake.mp4"
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const [fade, setFade] = useState(true); // true = active is visible, false = transitioning
  
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure both videos are muted programmatically to guarantee autoplay
    if (videoRef1.current) {
      videoRef1.current.muted = true;
      videoRef1.current.defaultMuted = true;
    }
    if (videoRef2.current) {
      videoRef2.current.muted = true;
      videoRef2.current.defaultMuted = true;
    }
  }, []);

  const handleVideoEnded = () => {
    // Start transition
    setFade(false);
    
    setTimeout(() => {
      setActiveIdx((prev) => (prev + 1) % videos.length);
      setFade(true);
    }, 800); // match duration of opacity transition
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden bg-black">
      {/* Video Player 1 */}
      <video
        ref={videoRef1}
        src={videos[0]}
        autoPlay
        muted
        playsInline
        onEnded={activeIdx === 0 ? handleVideoEnded : undefined}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
          activeIdx === 0 && fade ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Video Player 2 */}
      <video
        ref={videoRef2}
        src={videos[1]}
        autoPlay
        muted
        playsInline
        onEnded={activeIdx === 1 ? handleVideoEnded : undefined}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
          activeIdx === 1 && fade ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Fixed Ambient Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/25 to-secondary-container/15 z-10" />
      {/* Dynamic mesh dot pattern overlay to mask scaling and make it look high-res */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:8px_8px] opacity-40 z-10" />
    </div>
  );
};
