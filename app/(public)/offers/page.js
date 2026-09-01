import { weeklyOffers } from '@/lib/siteData';

export default function Offers() {
  const activeOffers = weeklyOffers.filter(
    (offer) => offer.active
  );

  return (
    <>
      <section className="page-hero">
        <div className="container">

          <div className="eyebrow">
            Every Week
          </div>

          <h1>Offers</h1>

          <p className="muted">
            Seven days of reasons to stop by.
          </p>

        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="offers-grid">

            {activeOffers.map((offer) => (
              <div
                className="offer"
                key={offer.id}
              >
                <div className="day">
                  {offer.shortDay}
                </div>

                <h3>
                  {offer.offer}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}