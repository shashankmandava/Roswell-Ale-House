'use client';

import { useState } from 'react';
import { events as initialEvents } from '@/lib/siteData';

const eventTypes = [
  'Trivia',
  'Bingo',
  'Live Music',
  'Karaoke',
  'Special Event',
  'Other'
];

const emptyForm = {
  title: '',
  type: 'Special Event',
  schedule: '',
  time: '',
  description: '',
  active: true
};

export default function AdminEventsPage() {
  const [events, setEvents] = useState(() =>
    initialEvents.map((event) => ({ ...event }))
  );

  const [showForm, setShowForm] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState(emptyForm);

  const activeCount = events.filter(
    (event) => event.active
  ).length;

  const hiddenCount = events.filter(
    (event) => !event.active
  ).length;


  /* ========================================
     OPEN ADD FORM
  ======================================== */

  function openAddForm() {
    setEditingId(null);

    setForm({
      ...emptyForm
    });

    setShowForm(true);
  }


  /* ========================================
     OPEN EDIT FORM
  ======================================== */

  function openEditForm(eventItem) {
    setEditingId(eventItem.id);

    setForm({
      title: eventItem.title,
      type: eventItem.type,
      schedule: eventItem.schedule,
      time: eventItem.time,
      description: eventItem.description,
      active: eventItem.active
    });

    setShowForm(true);
  }


  /* ========================================
     CLOSE FORM
  ======================================== */

  function closeForm() {
    setShowForm(false);
    setEditingId(null);
  }


  /* ========================================
     FORM CHANGE
  ======================================== */

  function handleFormChange(event) {
    const {
      name,
      value,
      type,
      checked
    } = event.target;

    setForm((current) => ({
      ...current,

      [name]:
        type === 'checkbox'
          ? checked
          : value
    }));
  }


  /* ========================================
     SAVE EVENT
  ======================================== */

  function saveEvent(event) {
    event.preventDefault();

    const title = form.title.trim();
    const schedule = form.schedule.trim();
    const time = form.time.trim();
    const description = form.description.trim();

    if (
      !title ||
      !schedule ||
      !time ||
      !description
    ) {
      return;
    }

    if (editingId !== null) {
      setEvents((current) =>
        current.map((eventItem) =>
          eventItem.id === editingId
            ? {
                ...eventItem,
                title,
                type: form.type,
                schedule,
                time,
                description,
                active: form.active
              }
            : eventItem
        )
      );
    } else {
      const newEvent = {
        id: `event-${Date.now()}`,
        title,
        type: form.type,
        schedule,
        time,
        description,
        active: form.active
      };

      setEvents((current) => [
        ...current,
        newEvent
      ]);
    }

    closeForm();
  }


  /* ========================================
     TOGGLE EVENT
  ======================================== */

  function toggleEvent(id) {
    setEvents((current) =>
      current.map((eventItem) =>
        eventItem.id === id
          ? {
              ...eventItem,
              active: !eventItem.active
            }
          : eventItem
      )
    );
  }


  /* ========================================
     DELETE EVENT
  ======================================== */

  function deleteEvent(id) {
    const confirmed = window.confirm(
      'Are you sure you want to delete this event?'
    );

    if (!confirmed) {
      return;
    }

    setEvents((current) =>
      current.filter(
        (eventItem) => eventItem.id !== id
      )
    );
  }


  return (
    <>
      <header className="adminTopbar">

        <div>
          <p className="adminEyebrow">
            RESTAURANT CONTENT
          </p>

          <h1>Events Management</h1>
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

        <div className="eventsAdminHeading">

          <div>

            <p className="adminEyebrow">
              EVENTS
            </p>

            <h2>
              Weekly Events
            </h2>

            <p>
              Manage events displayed on the
              Roswell Ale House website.
            </p>

          </div>


          <button
            className="eventAddButton"
            onClick={openAddForm}
          >
            + Add Event
          </button>

        </div>


        {/* STATS */}

        <div className="eventsAdminStats">

          <div>
            <span>Total Events</span>
            <strong>{events.length}</strong>
          </div>

          <div>
            <span>Active</span>
            <strong>{activeCount}</strong>
          </div>

          <div>
            <span>Hidden</span>
            <strong>{hiddenCount}</strong>
          </div>

        </div>


        {/* EVENTS */}

        <section className="eventsAdminPanel">

          <div className="eventsAdminPanelHeader">

            <div>

              <p className="adminEyebrow">
                EVENT SCHEDULE
              </p>

              <h3>
                Current Events
              </h3>

            </div>

          </div>


          <div className="eventsAdminList">

            {events.length === 0 ? (

              <div className="eventsEmpty">

                <h3>No events yet</h3>

                <p>
                  Add an event to get started.
                </p>

              </div>

            ) : (

              events.map((eventItem) => (

                <article
                  className={
                    eventItem.active
                      ? 'eventAdminCard'
                      : 'eventAdminCard inactive'
                  }
                  key={eventItem.id}
                >

                  <div className="eventAdminType">

                    <span>
                      {eventItem.type}
                    </span>

                  </div>


                  <div className="eventAdminInfo">

                    <h3>
                      {eventItem.title}
                    </h3>

                    <div className="eventAdminSchedule">

                      <span>
                        {eventItem.schedule}
                      </span>

                      <span>•</span>

                      <span>
                        {eventItem.time}
                      </span>

                    </div>

                    <p>
                      {eventItem.description}
                    </p>

                  </div>


                  <div className="eventAdminStatus">

                    <button
                      className={
                        eventItem.active
                          ? 'eventStatusButton active'
                          : 'eventStatusButton inactive'
                      }
                      onClick={() =>
                        toggleEvent(eventItem.id)
                      }
                    >

                      <span></span>

                      {eventItem.active
                        ? 'Active'
                        : 'Hidden'}

                    </button>

                  </div>


                  <div className="eventAdminActions">

                    <button
                      className="eventEditButton"
                      onClick={() =>
                        openEditForm(eventItem)
                      }
                    >
                      Edit
                    </button>

                    <button
                      className="eventDeleteButton"
                      onClick={() =>
                        deleteEvent(eventItem.id)
                      }
                    >
                      Delete
                    </button>

                  </div>

                </article>

              ))

            )}

          </div>

        </section>


        <div className="eventsAdminNotice">

          <strong>
            Sports are managed separately
          </strong>

          <p>
            This section is for restaurant events
            such as trivia, musical bingo, live
            music and special events. Sports games
            will be managed from the Sports Calendar.
          </p>

        </div>

      </main>


      {/* ADD / EDIT MODAL */}

      {showForm && (

        <div
          className="eventModalBackdrop"
          onMouseDown={closeForm}
        >

          <div
            className="eventModal"
            onMouseDown={(event) =>
              event.stopPropagation()
            }
          >

            <div className="eventModalHeader">

              <div>

                <p className="adminEyebrow">
                  EVENT
                </p>

                <h2>
                  {editingId !== null
                    ? 'Edit Event'
                    : 'Add Event'}
                </h2>

              </div>


              <button
                className="eventModalClose"
                onClick={closeForm}
                aria-label="Close"
              >
                ×
              </button>

            </div>


            <form
              className="eventEditForm"
              onSubmit={saveEvent}
            >

              <label>
                Event Name

                <input
                  name="title"
                  value={form.title}
                  onChange={handleFormChange}
                  placeholder="Example: Trivia Night"
                  required
                />
              </label>


              <label>
                Event Type

                <select
                  name="type"
                  value={form.type}
                  onChange={handleFormChange}
                >

                  {eventTypes.map((type) => (
                    <option
                      key={type}
                      value={type}
                    >
                      {type}
                    </option>
                  ))}

                </select>

              </label>


              <div className="eventFormRow">

                <label>
                  Schedule

                  <input
                    name="schedule"
                    value={form.schedule}
                    onChange={handleFormChange}
                    placeholder="Example: Every Tuesday"
                    required
                  />
                </label>


                <label>
                  Time

                  <input
                    name="time"
                    value={form.time}
                    onChange={handleFormChange}
                    placeholder="Example: 7:30 PM"
                    required
                  />
                </label>

              </div>


              <label>
                Description

                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleFormChange}
                  placeholder="Describe the event..."
                  rows="4"
                  required
                />
              </label>


              <label className="eventActiveCheckbox">

                <input
                  type="checkbox"
                  name="active"
                  checked={form.active}
                  onChange={handleFormChange}
                />

                <div>

                  <strong>
                    Event is active
                  </strong>

                  <span>
                    Active events are intended to
                    appear on the customer website.
                  </span>

                </div>

              </label>


              <div className="eventFormActions">

                <button
                  type="button"
                  className="eventCancelButton"
                  onClick={closeForm}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="eventSaveButton"
                >
                  {editingId !== null
                    ? 'Save Changes'
                    : 'Add Event'}
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </>
  );
}