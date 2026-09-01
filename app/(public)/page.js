import Link from 'next/link';
import HeroVideo from '@/components/HeroVideo';
import MenuDisplay from '@/components/MenuDisplay';

export default function Home(){
  return <>
    <section className="hero">
      <HeroVideo />
      <div className="hero-content">
        <div className="eyebrow">Roswell's Neighborhood Sports Bar</div>
        <h1>Eat. Drink. Game On.</h1>
        <p>Cold drinks, crowd-favorite food, late-night energy, and wall-to-wall game day atmosphere in the heart of Roswell.</p>
        <div className="hero-actions"><Link href="/menu" className="btn btn-primary">View Menu</Link><Link href="/offers" className="btn btn-ghost">Weekly Offers</Link></div>
      </div>
    </section>
    <section id="home-menu" className="section" style={{background:'#0d0d0d'}}><div className="container"><div className="eyebrow">Food & Drinks</div><h2 className="section-title">The Menu</h2><p className="muted">Sample menu items are included for now and can be replaced with the restaurant's final menu.</p><MenuDisplay /></div></section>
  </>;
}
