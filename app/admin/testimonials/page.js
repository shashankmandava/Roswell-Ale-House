'use client';

import { useState } from 'react';

const initialTestimonials = [
  {
    id: 1,
    name: 'John Smith',
    rating: 5,
    text: 'Great atmosphere, cold drinks and the perfect place to watch the game.',
    date: 'Aug 30, 2026',
    status: 'pending'
  },
  {
    id: 2,
    name: 'Sarah Williams',
    rating: 5,
    text: 'The food was fantastic and our server was great. We will definitely be back.',
    date: 'Aug 29, 2026',
    status: 'pending'
  },
  {
    id: 3,
    name: 'Mike Anderson',
    rating: 4,
    text: 'Awesome sports bar with plenty of TVs and a really good burger.',
    date: 'Aug 28, 2026',
    status: 'pending'
  },
  {
    id: 4,
    name: 'Emily Davis',
    rating: 5,
    text: 'We came for trivia night and had an amazing time. Great local spot.',
    date: 'Aug 27, 2026',
    status: 'pending'
  },
  {
    id: 5,
    name: 'David Miller',
    rating: 5,
    text: 'One of my favorite places in Roswell to catch a game with friends.',
    date: 'Aug 22, 2026',
    status: 'approved'
  }
];

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] =
    useState(initialTestimonials);

  const [activeTab, setActiveTab] =
    useState('pending');

  function changeStatus(id, newStatus) {
    setTestimonials((current) =>
      current.map((testimonial) =>
        testimonial.id === id
          ? { ...testimonial, status: newStatus }
          : testimonial
      )
    );
  }

  const pendingCount = testimonials.filter(
    (item) => item.status === 'pending'
  ).length;

  const approvedCount = testimonials.filter(
    (item) => item.status === 'approved'
  ).length;

  const rejectedCount = testimonials.filter(
    (item) => item.status === 'rejected'
  ).length;

  const visibleTestimonials =
    testimonials.filter(
      (item) => item.status === activeTab
    );

  return (
    <>
      <header className="adminTopbar">
        <div>
          <p className="adminEyebrow">
            CUSTOMER CONTENT
          </p>

          <h1>Testimonials</h1>
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

        <section className="adminPageIntro">
          <div>
            <p className="adminEyebrow">
              TESTIMONIAL MANAGEMENT
            </p>

            <h2>Customer Testimonials</h2>

            <p>
              Review customer submissions before they
              appear on the Roswell Ale House website.
            </p>
          </div>
        </section>

        <div className="testimonialTabs">

          <button
            className={
              activeTab === 'pending'
                ? 'testimonialTab active'
                : 'testimonialTab'
            }
            onClick={() => setActiveTab('pending')}
          >
            Pending
            <span>{pendingCount}</span>
          </button>

          <button
            className={
              activeTab === 'approved'
                ? 'testimonialTab active'
                : 'testimonialTab'
            }
            onClick={() => setActiveTab('approved')}
          >
            Approved
            <span>{approvedCount}</span>
          </button>

          <button
            className={
              activeTab === 'rejected'
                ? 'testimonialTab active'
                : 'testimonialTab'
            }
            onClick={() => setActiveTab('rejected')}
          >
            Rejected
            <span>{rejectedCount}</span>
          </button>

        </div>

        <section className="testimonialAdminPanel">

          <div className="testimonialPanelHeader">
            <div>
              <h3>
                {activeTab.charAt(0).toUpperCase() +
                  activeTab.slice(1)}
                {' '}Testimonials
              </h3>

              <p>
                {visibleTestimonials.length}{' '}
                {visibleTestimonials.length === 1
                  ? 'testimonial'
                  : 'testimonials'}
              </p>
            </div>
          </div>

          <div className="testimonialAdminList">

            {visibleTestimonials.length === 0 ? (
              <div className="testimonialEmpty">
                <div>★</div>

                <h3>
                  No {activeTab} testimonials
                </h3>

                <p>
                  Testimonials with this status will
                  appear here.
                </p>
              </div>
            ) : (
              visibleTestimonials.map(
                (testimonial) => (
                  <article
                    className="testimonialAdminCard"
                    key={testimonial.id}
                  >

                    <div className="testimonialAdminTop">

                      <div className="testimonialCustomer">

                        <div className="testimonialInitial">
                          {testimonial.name.charAt(0)}
                        </div>

                        <div>
                          <strong>
                            {testimonial.name}
                          </strong>

                          <span>
                            Submitted {testimonial.date}
                          </span>
                        </div>

                      </div>

                      <div
                        className="testimonialStars"
                        aria-label={
                          `${testimonial.rating} out of 5 stars`
                        }
                      >
                        {'★'.repeat(testimonial.rating)}
                        <span>
                          {'★'.repeat(
                            5 - testimonial.rating
                          )}
                        </span>
                      </div>

                    </div>

                    <blockquote>
                      “{testimonial.text}”
                    </blockquote>

                    <div className="testimonialAdminFooter">

                      <div
                        className={
                          `testimonialStatus ${testimonial.status}`
                        }
                      >
                        {testimonial.status}
                      </div>

                      <div className="testimonialActions">

                        {testimonial.status !==
                          'approved' && (
                          <button
                            className="testimonialApprove"
                            onClick={() =>
                              changeStatus(
                                testimonial.id,
                                'approved'
                              )
                            }
                          >
                            ✓ Approve
                          </button>
                        )}

                        {testimonial.status !==
                          'rejected' && (
                          <button
                            className="testimonialReject"
                            onClick={() =>
                              changeStatus(
                                testimonial.id,
                                'rejected'
                              )
                            }
                          >
                            ✕ Reject
                          </button>
                        )}

                        {testimonial.status !==
                          'pending' && (
                          <button
                            className="testimonialPending"
                            onClick={() =>
                              changeStatus(
                                testimonial.id,
                                'pending'
                              )
                            }
                          >
                            Return to Pending
                          </button>
                        )}

                      </div>

                    </div>

                  </article>
                )
              )
            )}

          </div>

        </section>

      </main>
    </>
  );
}