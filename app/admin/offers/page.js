'use client';

import { useState } from 'react';
import { weeklyOffers } from '@/lib/siteData';

export default function AdminOffersPage() {
  const [offers, setOffers] = useState(() =>
    weeklyOffers.map((offer) => ({ ...offer }))
  );

  const [editingOffer, setEditingOffer] = useState(null);
  const [offerText, setOfferText] = useState('');

  const activeCount = offers.filter(
    (offer) => offer.active
  ).length;

  const hiddenCount = offers.filter(
    (offer) => !offer.active
  ).length;

  function openEditModal(offer) {
    setEditingOffer(offer);
    setOfferText(offer.offer);
  }

  function closeEditModal() {
    setEditingOffer(null);
    setOfferText('');
  }

  function saveOffer(event) {
    event.preventDefault();

    const cleanedOffer = offerText.trim();

    if (!cleanedOffer || !editingOffer) {
      return;
    }

    setOffers((currentOffers) =>
      currentOffers.map((offer) =>
        offer.id === editingOffer.id
          ? {
              ...offer,
              offer: cleanedOffer
            }
          : offer
      )
    );

    closeEditModal();
  }

  function toggleOffer(id) {
    setOffers((currentOffers) =>
      currentOffers.map((offer) =>
        offer.id === id
          ? {
              ...offer,
              active: !offer.active
            }
          : offer
      )
    );
  }

  function resetOffer(id) {
    const originalOffer = weeklyOffers.find(
      (offer) => offer.id === id
    );

    if (!originalOffer) {
      return;
    }

    const confirmed = window.confirm(
      `Reset ${originalOffer.day}'s offer?`
    );

    if (!confirmed) {
      return;
    }

    setOffers((currentOffers) =>
      currentOffers.map((offer) =>
        offer.id === id
          ? { ...originalOffer }
          : offer
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

          <h1>Offers Management</h1>
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
        <div className="offersAdminHeading">
          <div>
            <p className="adminEyebrow">
              WEEKLY SPECIALS
            </p>

            <h2>Weekly Offers</h2>

            <p>
              Manage the weekly offers displayed on the
              Roswell Ale House website.
            </p>
          </div>
        </div>

        <div className="offersAdminStats">
          <div>
            <span>Weekly Offers</span>
            <strong>{offers.length}</strong>
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

        <section className="offersAdminPanel">
          <div className="offersAdminPanelHeader">
            <div>
              <p className="adminEyebrow">
                MONDAY - SUNDAY
              </p>

              <h3>Current Weekly Schedule</h3>
            </div>
          </div>

          <div className="offersAdminList">
            {offers.map((offer) => (
              <article
                key={offer.id}
                className={
                  offer.active
                    ? 'offersAdminCard'
                    : 'offersAdminCard inactive'
                }
              >
                <div className="offersAdminDay">
                  <span>{offer.shortDay}</span>
                  <strong>{offer.day}</strong>
                </div>

                <div className="offersAdminDescription">
                  <span>CURRENT OFFER</span>
                  <h3>{offer.offer}</h3>
                </div>

                <div className="offersAdminStatus">
                  <button
                    type="button"
                    className={
                      offer.active
                        ? 'offerStatusButton active'
                        : 'offerStatusButton inactive'
                    }
                    onClick={() => toggleOffer(offer.id)}
                  >
                    <span></span>

                    {offer.active
                      ? 'Active'
                      : 'Hidden'}
                  </button>
                </div>

                <div className="offersAdminActions">
                  <button
                    type="button"
                    className="offerEditButton"
                    onClick={() => openEditModal(offer)}
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    className="offerResetButton"
                    onClick={() => resetOffer(offer.id)}
                  >
                    Reset
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="offersAdminNotice">
          <strong>Offer visibility</strong>

          <p>
            Active offers are intended to appear on the
            customer website. Hidden offers stay in the
            admin system but are not displayed to customers
            once we connect the database.
          </p>
        </div>
      </main>

      {editingOffer && (
        <div
          className="offerModalBackdrop"
          onMouseDown={closeEditModal}
        >
          <div
            className="offerModal"
            onMouseDown={(event) =>
              event.stopPropagation()
            }
          >
            <div className="offerModalHeader">
              <div>
                <p className="adminEyebrow">
                  WEEKLY OFFER
                </p>

                <h2>
                  Edit {editingOffer.day}
                </h2>
              </div>

              <button
                type="button"
                className="offerModalClose"
                onClick={closeEditModal}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <form
              className="offerEditForm"
              onSubmit={saveOffer}
            >
              <label>
                Day

                <input
                  value={editingOffer.day}
                  disabled
                />
              </label>

              <label>
                Offer

                <input
                  value={offerText}
                  onChange={(event) =>
                    setOfferText(event.target.value)
                  }
                  placeholder="Enter weekly offer"
                  required
                />
              </label>

              <div className="offerFormPreview">
                <span>WEBSITE PREVIEW</span>

                <div>
                  <strong>
                    {editingOffer.shortDay}
                  </strong>

                  <h3>
                    {offerText || 'Offer'}
                  </h3>
                </div>
              </div>

              <div className="offerFormActions">
                <button
                  type="button"
                  className="offerCancelButton"
                  onClick={closeEditModal}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="offerSaveButton"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}