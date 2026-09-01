import { galleryMedia } from '@/lib/siteData';

export default function Gallery() {
  const visibleMedia = galleryMedia.filter(
    (item) => item.visible
  );

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">
            Photos & Video
          </div>

          <h1>Gallery</h1>

          <p className="muted">
            A look inside Roswell Ale House.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">

          {visibleMedia.length === 0 ? (
            <p className="muted">
              Gallery coming soon.
            </p>
          ) : (
            <div className="gallery-media-grid">

              {visibleMedia.map((item) => (
                <article
                  key={item.id}
                  className={
                    item.featured
                      ? 'gallery-media-card featured'
                      : 'gallery-media-card'
                  }
                >

                  <div className="gallery-media-preview">

                    {item.type === 'video' ? (
                      <video
                        src={item.src}
                        poster={item.poster || undefined}
                        controls
                        playsInline
                        preload="metadata"
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt={item.title}
                      />
                    )}

                    {item.featured && (
                      <span className="gallery-featured-label">
                        Featured
                      </span>
                    )}

                  </div>

                  <div className="gallery-media-info">

                    <div className="eyebrow">
                      {item.category}
                    </div>

                    <h3>
                      {item.title}
                    </h3>

                  </div>

                </article>
              ))}

            </div>
          )}

        </div>
      </section>
    </>
  );
}