export default function AdminDashboard() {
  return (
    <>
      <header className="adminTopbar">
        <div>
          <p className="adminEyebrow">ROSWELL ALE HOUSE</p>
          <h1>Dashboard</h1>
        </div>

        <div className="adminAccount">
          <div className="adminAvatar">A</div>

          <div>
            <strong>Administrator</strong>
            <span>Admin Portal</span>
          </div>
        </div>
      </header>

      <main className="adminContent">

        <section className="adminWelcome">
          <div>
            <p className="adminEyebrow">ADMINISTRATION</p>

            <h2>Welcome back.</h2>

            <p>
              Manage Roswell Ale House content from one place.
            </p>
          </div>
        </section>

        <section className="adminStats">

          <div className="adminStatCard">
            <span>Pending Testimonials</span>
            <strong>4</strong>
            <p>Waiting for approval</p>
          </div>

          <div className="adminStatCard">
            <span>Career Applications</span>
            <strong>7</strong>
            <p>3 new applications</p>
          </div>

          <div className="adminStatCard">
            <span>Menu Items</span>
            <strong>32</strong>
            <p>Food & drinks</p>
          </div>

          <div className="adminStatCard">
            <span>Upcoming Events</span>
            <strong>5</strong>
            <p>Currently scheduled</p>
          </div>

        </section>

        <section className="adminPanel">

          <div className="adminPanelHeader">
            <div>
              <p className="adminEyebrow">QUICK ACCESS</p>
              <h2>Manage Restaurant</h2>
            </div>
          </div>

          <div className="adminQuickGrid">

            <a
              href="/admin/testimonials"
              className="adminQuickCard"
            >
              <span>★</span>

              <div>
                <strong>Testimonials</strong>
                <p>
                  Review and approve customer testimonials.
                </p>
              </div>
            </a>

            <a
              href="/admin/menu"
              className="adminQuickCard"
            >
              <span>☰</span>

              <div>
                <strong>Menu</strong>
                <p>
                  Add, edit and manage food and drinks.
                </p>
              </div>
            </a>

            <a
              href="/admin/applications"
              className="adminQuickCard"
            >
              <span>▣</span>

              <div>
                <strong>Applications</strong>
                <p>
                  Review career applications.
                </p>
              </div>
            </a>

            <a
              href="/admin/offers"
              className="adminQuickCard"
            >
              <span>%</span>

              <div>
                <strong>Offers</strong>
                <p>
                  Manage weekly specials and promotions.
                </p>
              </div>
            </a>

            <a
              href="/admin/events"
              className="adminQuickCard"
            >
              <span>◆</span>

              <div>
                <strong>Events</strong>
                <p>
                  Manage the weekly event schedule.
                </p>
              </div>
            </a>

            <a
              href="/admin/sports"
              className="adminQuickCard"
            >
              <span>●</span>

              <div>
                <strong>Sports Calendar</strong>
                <p>
                  Manage games being shown at the bar.
                </p>
              </div>
            </a>

            <a
              href="/admin/gallery"
              className="adminQuickCard"
            >
              <span>▦</span>

              <div>
                <strong>Gallery</strong>
                <p>
                  Manage restaurant photos and videos.
                </p>
              </div>
            </a>

            <a
              href="/admin/settings"
              className="adminQuickCard"
            >
              <span>⚙</span>

              <div>
                <strong>Restaurant Settings</strong>
                <p>
                  Manage contact details and opening hours.
                </p>
              </div>
            </a>

          </div>

        </section>

      </main>
    </>
  );
}