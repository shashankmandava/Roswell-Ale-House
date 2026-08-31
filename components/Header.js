'use client';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  ['Home','/'], ['About Us','/about'], ['Menu','/menu'], ['Order Online','/order-online'],
  ['Events','/events'], ['Offers','/offers'], ['Gallery','/gallery']
];

export default function Header(){
  const [open,setOpen]=useState(false);
  return <header className="header">
    <div className="container nav">
      <Link href="/" className="brand" onClick={()=>setOpen(false)}>
        <img src="/Roswell Ale House Logo.jpeg" alt="Roswell Ale House logo" />
        {/* <strong>ROSWELL ALE HOUSE</strong> */}
      </Link>
      <nav className={`nav-links ${open?'open':''}`}>
        {links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}
      </nav>
      <button className="mobile-toggle" aria-label="Toggle navigation" onClick={()=>setOpen(v=>!v)}>{open?<X/>:<Menu/>}</button>
    </div>
  </header>
}
