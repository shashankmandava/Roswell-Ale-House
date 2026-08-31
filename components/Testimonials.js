'use client';
import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/lib/siteData';

export default function Testimonials(){
  const ref=useRef(null);
  const move=(d)=>ref.current?.scrollBy({left:d*360,behavior:'smooth'});
  useEffect(()=>{
    const id=setInterval(()=>move(1),4500);
    return ()=>clearInterval(id);
  },[]);
  return <section className="testimonials-wrap">
    <div className="container">
      <div className="testimonials" ref={ref}>
        {testimonials.map((t,i)=><div className="testimonial" key={i}>
          <div className="eyebrow">Guest Feedback</div>
          <p>“{t.quote}”</p>
          <strong>{t.name}</strong>
        </div>)}
      </div>
      <div className="testimonial-controls">
        <button className="icon-btn" onClick={()=>move(-1)} aria-label="Previous testimonial"><ChevronLeft size={18}/></button>
        <button className="icon-btn" onClick={()=>move(1)} aria-label="Next testimonial"><ChevronRight size={18}/></button>
      </div>
    </div>
  </section>
}
