'use client';
import { useState } from 'react';
import { foodCategories, drinkCategories } from '@/lib/siteData';

export default function MenuDisplay(){
  const [type,setType]=useState('food');
  const categories=type==='food'?foodCategories:drinkCategories;
  const jump=(id)=>document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});
  return <>
    <div className="menu-tabs">
      <button className={`tab ${type==='food'?'active':''}`} onClick={()=>setType('food')}>Food Menu</button>
      <button className={`tab ${type==='drinks'?'active':''}`} onClick={()=>setType('drinks')}>Drinks Menu</button>
    </div>
    <div className="category-nav">
      {categories.map(c=><button key={c.id} onClick={()=>jump(c.id)}>{c.name}</button>)}
    </div>
    {categories.map(c=><section className="menu-category" id={c.id} key={c.id}>
      <h2>{c.name}</h2>
      <div className="menu-list">
        {c.items.map(([name,desc,price])=><article className="menu-item" key={name}>
          <div><h3>{name}</h3><p>{desc}</p></div><div className="price">{price}</div>
        </article>)}
      </div>
    </section>)}
  </>
}
