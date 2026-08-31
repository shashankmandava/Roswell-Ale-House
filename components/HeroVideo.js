'use client';

export default function HeroVideo() {
  const handleVideoEnd = () => {
    console.log('VIDEO ENDED');

    const menu = document.getElementById('home-menu');

    if (menu) {
      console.log('MENU FOUND');

      const offset = 50;

      const menuPosition =
        menu.getBoundingClientRect().top +
        window.scrollY -
        offset;

      window.scrollTo({
        top: menuPosition,
        behavior: 'smooth'
});
    } else {
      console.log('MENU NOT FOUND');
    }
  };

  return (
    <>
      <video
        className="hero-video"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="hero-video-overlay" />
    </>
  );
}