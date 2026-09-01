'use client';

import { useState } from 'react';
import {
  sportsGames as initialSportsGames
} from '@/lib/siteData';

export default function AdminSportsPage() {
  const [games, setGames] = useState(() =>
    initialSportsGames.map((game) => ({ ...game }))
  );

  const [activeView, setActiveView] = useState('upcoming');
  const [leagueFilter, setLeagueFilter] = useState('All');
  const [search, setSearch] = useState('');

  const leagues = [
    'All',
    ...new Set(games.map((game) => game.league))
  ];

  const websiteCount = games.filter(
    (game) => game.visible
  ).length;

  const featuredCount = games.filter(
    (game) => game.visible && game.featured
  ).length;

  function toggleVisible(id) {
    setGames((current) =>
      current.map((game) => {
        if (game.id !== id) {
          return game;
        }

        const newVisible = !game.visible;

        return {
          ...game,
          visible: newVisible,

          // A hidden game should not remain featured.
          featured: newVisible
            ? game.featured
            : false
        };
      })
    );
  }

  function toggleFeatured(id) {
    setGames((current) =>
      current.map((game) => {
        if (game.id !== id) {
          return game;
        }

        // Featuring a game automatically puts it
        // on the website.
        if (!game.featured) {
          return {
            ...game,
            visible: true,
            featured: true
          };
        }

        return {
          ...game,
          featured: false
        };
      })
    );
  }

  const filteredGames = games.filter((game) => {
    const matchesView =
      activeView === 'upcoming'
        ? true
        : game.visible;

    const matchesLeague =
      leagueFilter === 'All' ||
      game.league === leagueFilter;

    const searchValue =
      search.trim().toLowerCase();

    const matchesSearch =
      !searchValue ||
      game.awayTeam
        .toLowerCase()
        .includes(searchValue) ||
      game.homeTeam
        .toLowerCase()
        .includes(searchValue) ||
      game.league
        .toLowerCase()
        .includes(searchValue);

    return (
      matchesView &&
      matchesLeague &&
      matchesSearch
    );
  });

  return (
    <>
      <header className="adminTopbar">
        <div>
          <p className="adminEyebrow">
            RESTAURANT CONTENT
          </p>

          <h1>Sports Calendar</h1>
        </div>

        <div className="adminAccount">
          <div className="adminAvatar">
            A
          </div>

          <div>
            <strong>Administrator</strong>
            <span>Admin Portal</span>
          </div>
        </div>
      </header>

      <main className="adminContent">

        <div className="sportsAdminHeading">
          <div>
            <p className="adminEyebrow">
              SPORTS FEED
            </p>

            <h2>Upcoming Games</h2>

            <p>
              Select which upcoming games should
              be promoted on the Roswell Ale House
              website.
            </p>
          </div>

          <div className="sportsFeedStatus">
            <span></span>

            Sample Sports Feed
          </div>
        </div>

        <div className="sportsAdminStats">
          <div>
            <span>Upcoming Games</span>
            <strong>{games.length}</strong>
          </div>

          <div>
            <span>On Website</span>
            <strong>{websiteCount}</strong>
          </div>

          <div>
            <span>Featured</span>
            <strong>{featuredCount}</strong>
          </div>

          <div>
            <span>Available Leagues</span>
            <strong>{leagues.length - 1}</strong>
          </div>
        </div>

        <section className="sportsAdminPanel">

          <div className="sportsViewTabs">
            <button
              className={
                activeView === 'upcoming'
                  ? 'sportsViewTab active'
                  : 'sportsViewTab'
              }
              onClick={() =>
                setActiveView('upcoming')
              }
            >
              Upcoming Games

              <span>{games.length}</span>
            </button>

            <button
              className={
                activeView === 'website'
                  ? 'sportsViewTab active'
                  : 'sportsViewTab'
              }
              onClick={() =>
                setActiveView('website')
              }
            >
              On Website

              <span>{websiteCount}</span>
            </button>
          </div>

          <div className="sportsAdminFilters">
            <input
              type="search"
              placeholder="Search team or league..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />

            <select
              value={leagueFilter}
              onChange={(event) =>
                setLeagueFilter(event.target.value)
              }
            >
              {leagues.map((league) => (
                <option
                  key={league}
                  value={league}
                >
                  {league === 'All'
                    ? 'All Leagues'
                    : league}
                </option>
              ))}
            </select>
          </div>

          <div className="sportsFeedHeader">
            <span>Game</span>
            <span>Date & Time</span>
            <span>TV</span>
            <span>Show on Website</span>
            <span>Featured</span>
          </div>

          <div className="sportsFeedList">

            {filteredGames.length === 0 ? (
              <div className="sportsEmpty">
                <h3>No games found</h3>

                <p>
                  Try changing your filters.
                </p>
              </div>
            ) : (
              filteredGames.map((game) => (
                <article
                  className="sportsFeedGame"
                  key={game.id}
                >
                  <div className="sportsFeedMatchup">

                    <span className="sportsFeedLeague">
                      {game.league}
                    </span>

                    <div>
                      <strong>
                        {game.awayTeam}
                      </strong>

                      <span className="sportsAt">
                        @
                      </span>

                      <strong>
                        {game.homeTeam}
                      </strong>
                    </div>

                    {game.venue && (
                      <small>
                        {game.venue}
                      </small>
                    )}
                  </div>

                  <div className="sportsFeedDate">
                    <strong>
                      {game.date}
                    </strong>

                    <span>
                      {game.time}
                    </span>
                  </div>

                  <div className="sportsFeedChannel">
                    {game.channel || 'TBD'}
                  </div>

                  <div className="sportsFeedVisibility">
                    <button
                      type="button"
                      className={
                        game.visible
                          ? 'sportsToggle active'
                          : 'sportsToggle'
                      }
                      onClick={() =>
                        toggleVisible(game.id)
                      }
                      aria-label={
                        game.visible
                          ? 'Hide game from website'
                          : 'Show game on website'
                      }
                    >
                      <span></span>
                    </button>

                    <span>
                      {game.visible
                        ? 'Showing'
                        : 'Hidden'}
                    </span>
                  </div>

                  <div className="sportsFeedFeature">
                    <button
                      type="button"
                      className={
                        game.featured
                          ? 'sportsStar active'
                          : 'sportsStar'
                      }
                      onClick={() =>
                        toggleFeatured(game.id)
                      }
                      aria-label={
                        game.featured
                          ? 'Remove featured status'
                          : 'Feature game'
                      }
                    >
                      ★
                    </button>

                    <span>
                      {game.featured
                        ? 'Featured'
                        : 'Standard'}
                    </span>
                  </div>
                </article>
              ))
            )}

          </div>

        </section>

        <div className="sportsAdminNotice">
          <strong>
            Sample automatic sports feed
          </strong>

          <p>
            These games currently come from sample
            data. Later, a sports API can replace
            this feed automatically. The Show on
            Website and Featured selections will
            remain controlled by the administrator.
          </p>
        </div>

      </main>
    </>
  );
}