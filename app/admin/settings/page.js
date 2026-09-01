'use client';

import { useState } from 'react';
import { restaurant as initialRestaurant } from '@/lib/siteData';

export default function RestaurantSettingsPage() {
  const [restaurant, setRestaurant] = useState(() => ({
    ...initialRestaurant,
    social: {
      ...initialRestaurant.social
    },
    hours: initialRestaurant.hours.map((row) => [...row])
  }));

  const [form, setForm] = useState(() => ({
    ...initialRestaurant,
    social: {
      ...initialRestaurant.social
    },
    hours: initialRestaurant.hours.map((row) => [...row])
  }));

  const [saved, setSaved] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value
    }));

    setSaved(false);
  }

  function handleSocialChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      social: {
        ...current.social,
        [name]: value
      }
    }));

    setSaved(false);
  }

  function handleHoursChange(index, field, value) {
    setForm((current) => {
      const newHours = current.hours.map(
        (row) => [...row]
      );

      newHours[index][field] = value;

      return {
        ...current,
        hours: newHours
      };
    });

    setSaved(false);
  }

  function addHoursRow() {
    setForm((current) => ({
      ...current,
      hours: [
        ...current.hours,
        ['New Day', '11:00 AM – 12:00 AM']
      ]
    }));

    setSaved(false);
  }

  function removeHoursRow(index) {
    setForm((current) => ({
      ...current,
      hours: current.hours.filter(
        (_, rowIndex) => rowIndex !== index
      )
    }));

    setSaved(false);
  }

  function saveSettings(event) {
    event.preventDefault();

    const updatedRestaurant = {
      ...form,
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      address: form.address.trim(),
      mapsUrl: form.mapsUrl.trim(),
      social: {
        instagram: form.social.instagram.trim(),
        x: form.social.x.trim(),
        yelp: form.social.yelp.trim()
      },
      hours: form.hours.map(([day, hours]) => [
        day.trim(),
        hours.trim()
      ])
    };

    setRestaurant(updatedRestaurant);
    setForm(updatedRestaurant);
    setSaved(true);
  }

  function resetSettings() {
    setForm({
      ...restaurant,
      social: {
        ...restaurant.social
      },
      hours: restaurant.hours.map(
        (row) => [...row]
      )
    });

    setSaved(false);
  }

  return (
    <>
      <header className="adminTopbar">

        <div>
          <p className="adminEyebrow">
            RESTAURANT CONTENT
          </p>

          <h1>Restaurant Settings</h1>
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

        <div className="settingsHeading">

          <div>
            <p className="adminEyebrow">
              WEBSITE INFORMATION
            </p>

            <h2>Restaurant Settings</h2>

            <p>
              Manage the restaurant information
              displayed throughout the website.
            </p>
          </div>

          <div className="settingsStatus">
            <span></span>
            Local Settings
          </div>

        </div>


        <form
          className="settingsForm"
          onSubmit={saveSettings}
        >

          {/* =====================================
              BUSINESS INFORMATION
          ===================================== */}

          <section className="settingsCard">

            <div className="settingsCardHeader">

              <div className="settingsIcon">
                ◆
              </div>

              <div>
                <h3>Business Information</h3>

                <p>
                  Basic information about Roswell
                  Ale House.
                </p>
              </div>

            </div>

            <div className="settingsCardBody">

              <label>
                Restaurant Name

                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Roswell Ale House"
                />
              </label>

              <div className="settingsFormRow">

                <label>
                  Phone Number

                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(770) 555-0188"
                  />
                </label>

                <label>
                  Email Address

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="hello@roswellalehouse.com"
                  />
                </label>

              </div>

            </div>

          </section>


          {/* =====================================
              LOCATION
          ===================================== */}

          <section className="settingsCard">

            <div className="settingsCardHeader">

              <div className="settingsIcon">
                ●
              </div>

              <div>
                <h3>Location</h3>

                <p>
                  Address and Google Maps
                  information.
                </p>
              </div>

            </div>

            <div className="settingsCardBody">

              <label>
                Restaurant Address

                <input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="4651 Woodstock Rd Ste 301, Roswell, GA 30075"
                />
              </label>

              <label>
                Google Maps URL

                <input
                  name="mapsUrl"
                  value={form.mapsUrl}
                  onChange={handleChange}
                  placeholder="Google Maps URL"
                />

                <small>
                  Used when customers click the
                  address or directions button.
                </small>
              </label>

              <div className="settingsLocationPreview">

                <div className="settingsLocationPin">
                  ●
                </div>

                <div>
                  <strong>{form.name}</strong>

                  <span>
                    {form.address ||
                      'Restaurant address'}
                  </span>
                </div>

              </div>

            </div>

          </section>


          {/* =====================================
              HOURS
          ===================================== */}

          <section className="settingsCard">

            <div className="settingsCardHeader">

              <div className="settingsIcon">
                ◷
              </div>

              <div>
                <h3>Opening Hours</h3>

                <p>
                  Manage the hours displayed on
                  the website.
                </p>
              </div>

            </div>

            <div className="settingsCardBody">

              <div className="settingsHours">

                {form.hours.map(
                  ([day, hours], index) => (

                    <div
                      className="settingsHoursRow"
                      key={index}
                    >

                      <input
                        value={day}
                        onChange={(event) =>
                          handleHoursChange(
                            index,
                            0,
                            event.target.value
                          )
                        }
                        placeholder="Day"
                      />

                      <input
                        value={hours}
                        onChange={(event) =>
                          handleHoursChange(
                            index,
                            1,
                            event.target.value
                          )
                        }
                        placeholder="Hours"
                      />

                      <button
                        type="button"
                        className="settingsRemoveHours"
                        onClick={() =>
                          removeHoursRow(index)
                        }
                        aria-label="Remove hours row"
                      >
                        ×
                      </button>

                    </div>

                  )
                )}

              </div>

              <button
                type="button"
                className="settingsAddHours"
                onClick={addHoursRow}
              >
                + Add Hours Row
              </button>

            </div>

          </section>


          {/* =====================================
              SOCIAL MEDIA
          ===================================== */}

          <section className="settingsCard">

            <div className="settingsCardHeader">

              <div className="settingsIcon">
                @
              </div>

              <div>
                <h3>Social Media</h3>

                <p>
                  Links used by social buttons
                  throughout the website.
                </p>
              </div>

            </div>

            <div className="settingsCardBody">

              <label>
                Instagram URL

                <input
                  name="instagram"
                  value={form.social.instagram}
                  onChange={handleSocialChange}
                  placeholder="https://instagram.com/..."
                />
              </label>

              <label>
                X / Twitter URL

                <input
                  name="x"
                  value={form.social.x}
                  onChange={handleSocialChange}
                  placeholder="https://x.com/..."
                />
              </label>

              <label>
                Yelp URL

                <input
                  name="yelp"
                  value={form.social.yelp}
                  onChange={handleSocialChange}
                  placeholder="https://yelp.com/..."
                />
              </label>

            </div>

          </section>


          {/* =====================================
              WEBSITE PREVIEW
          ===================================== */}

          <section className="settingsCard">

            <div className="settingsCardHeader">

              <div className="settingsIcon">
                ◉
              </div>

              <div>
                <h3>Website Preview</h3>

                <p>
                  Preview the contact information
                  customers will see.
                </p>
              </div>

            </div>

            <div className="settingsPreview">

              <div>
                <span>RESTAURANT</span>
                <strong>{form.name}</strong>
              </div>

              <div>
                <span>PHONE</span>
                <strong>
                  {form.phone || 'Not set'}
                </strong>
              </div>

              <div>
                <span>EMAIL</span>
                <strong>
                  {form.email || 'Not set'}
                </strong>
              </div>

              <div>
                <span>ADDRESS</span>
                <strong>
                  {form.address || 'Not set'}
                </strong>
              </div>

            </div>

          </section>


          {/* =====================================
              SAVE BAR
          ===================================== */}

          <div className="settingsSaveBar">

            <div>

              {saved ? (
                <span className="settingsSaved">
                  ✓ Settings saved locally
                </span>
              ) : (
                <span>
                  Changes have not been saved.
                </span>
              )}

            </div>

            <div className="settingsSaveActions">

              <button
                type="button"
                className="settingsResetButton"
                onClick={resetSettings}
              >
                Reset Changes
              </button>

              <button
                type="submit"
                className="settingsSaveButton"
              >
                Save Settings
              </button>

            </div>

          </div>

        </form>


        <div className="settingsNotice">

          <strong>
            Local settings mode
          </strong>

          <p>
            Save Settings currently updates this
            admin page only. Once Firestore is
            connected, these settings will persist
            and automatically update the customer
            website.
          </p>

        </div>

      </main>
    </>
  );
}