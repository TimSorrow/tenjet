"use client";

import React, { useEffect, useRef } from "react";

export const BackgroundVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden bg-black">
      <video
        ref={videoRef}
        src="/videos/Reductedjetski4.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-100"
      />

      {/* Fixed Ambient Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/25 to-secondary-container/15 z-10" />
      {/* Dynamic mesh dot pattern overlay to mask scaling and make it look high-res */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:8px_8px] opacity-40 z-10" />
    </div>
  );
};
