'use client';
import { useEffect, useRef } from 'react';

export default function HomeVideo(){
  const ref=useRef(null);
  useEffect(()=>{
    const timer=setTimeout(()=>document.getElementById('home-menu')?.scrollIntoView({behavior:'smooth'}),8000);
    return ()=>clearTimeout(timer);
  },[]);
  return <div ref={ref} className="video-placeholder">
    <div className="video-box">
      <div className="play">▶</div>
      <h2>Homepage Video Placeholder</h2>
      <p className="muted">Replace this block with the restaurant video. For preview purposes, the page automatically moves to the menu after a short delay to demonstrate the requested post-video behavior.</p>
    </div>
  </div>
}
