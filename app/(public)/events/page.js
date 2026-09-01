import {
  events,
  sportsGames
} from '@/lib/siteData';

export default function Events() {
  const activeEvents = events.filter(
    (event) => event.active
  );

  const activeGames = sportsGames.filter(
    (game) => game.filter
  );

  return (
    <>
      <section className="page-hero">
        <div className="container">

          <div className="eyebrow">
            What's Happening
          </div>

          <h1>Events</h1>

        </div>
      </section>

      <section className="section">
        <div className="container">

          <div
            className="grid-3"
            style={{
              gridTemplateColumns:
                '1fr 1fr'
            }}
          >

            {/* EVENTS */}

            <div className="card">

              <div className="card-body">

                <div className="eyebrow">
                  Events
                </div>

                <h2>
                  Weekly Schedule
                </h2>

                {activeEvents.length === 0 ? (

                  <p className="muted">
                    Schedule coming soon.
                  </p>

                ) : (

                  <div className="public-events-list">

                    {activeEvents.map(
                      (event) => (

                        <div
                          className="public-event-item"
                          key={event.id}
                        >

                          <div className="eyebrow">
                            {event.schedule}
                          </div>

                          <h3>
                            {event.title}
                          </h3>

                          <p className="muted">
                            {event.time}
                          </p>

                          <p>
                            {event.description}
                          </p>

                        </div>

                      )
                    )}

                  </div>

                )}

              </div>

            </div>


            {/* SPORTS */}

            <div className="card">

              <div className="card-body">

                <div className="eyebrow">
                  Sports
                </div>

                <h2>
                  Sports Calendar
                </h2>

                {activeGames.length === 0 ? (

                  <p className="muted">
                    Sports calendar coming soon.
                  </p>

                ) : (

                  <div className="public-sports-list">

                    {activeGames.map(
                      (game) => (

                        <div
                          className="public-sports-game"
                          key={game.id}
                        >

                          <div className="public-sports-top">

                            <span className="eyebrow">
                              {game.league}
                            </span>

                            {game.featured && (
                              <span className="sports-featured">
                                Featured
                              </span>
                            )}

                          </div>

                          <h3>
                            {game.awayTeam}
                            {' @ '}
                            {game.homeTeam}
                          </h3>

                          <p className="muted">
                            {game.date}
                            {' • '}
                            {game.time}
                          </p>

                          {game.channel && (
                            <p>
                              Watch on {game.channel}
                            </p>
                          )}

                        </div>

                      )
                    )}

                  </div>

                )}

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}