'use client';

import { useState } from 'react';

const initialApplications = [
  {
    id: 1,
    name: 'Michael Johnson',
    email: 'michael.johnson@example.com',
    phone: '(770) 555-0142',
    position: 'Bartender',
    date: 'Sep 1, 2026',
    status: 'new',
    availability: 'Evenings and weekends',
    experience: '3 years',
    message:
      'I have three years of bartending experience in high-volume restaurants and sports bars. I am available evenings and weekends.'
  },
  {
    id: 2,
    name: 'Sarah Williams',
    email: 'sarah.williams@example.com',
    phone: '(678) 555-0198',
    position: 'Server',
    date: 'Aug 30, 2026',
    status: 'interview',
    availability: 'Open availability',
    experience: '2 years',
    message:
      'I have two years of serving experience and enjoy working in fast-paced restaurant environments.'
  },
  {
    id: 3,
    name: 'Daniel Carter',
    email: 'daniel.carter@example.com',
    phone: '(404) 555-0175',
    position: 'Line Cook',
    date: 'Aug 29, 2026',
    status: 'new',
    availability: 'Monday through Friday',
    experience: '4 years',
    message:
      'I have four years of kitchen experience including grill, fry and prep stations.'
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    phone: '(770) 555-0113',
    position: 'Host',
    date: 'Aug 27, 2026',
    status: 'reviewed',
    availability: 'Weeknights and weekends',
    experience: '1 year',
    message:
      'I have customer service experience and would love to work in a busy neighborhood restaurant.'
  },
  {
    id: 5,
    name: 'Chris Thompson',
    email: 'chris.thompson@example.com',
    phone: '(678) 555-0164',
    position: 'Bartender',
    date: 'Aug 25, 2026',
    status: 'hired',
    availability: 'Open availability',
    experience: '5 years',
    message:
      'Experienced bartender with five years of sports bar and restaurant experience.'
  },
  {
    id: 6,
    name: 'Ashley Brown',
    email: 'ashley.brown@example.com',
    phone: '(470) 555-0182',
    position: 'Server',
    date: 'Aug 23, 2026',
    status: 'rejected',
    availability: 'Weekends',
    experience: 'None',
    message:
      'I am looking for my first restaurant job and am available every weekend.'
  },
  {
    id: 7,
    name: 'James Wilson',
    email: 'james.wilson@example.com',
    phone: '(770) 555-0156',
    position: 'Line Cook',
    date: 'Aug 21, 2026',
    status: 'new',
    availability: 'Evenings',
    experience: '2 years',
    message:
      'I currently work in food service and have experience with prep, grill and closing duties.'
  }
];

const statuses = [
  'new',
  'reviewed',
  'interview',
  'hired',
  'rejected'
];

function formatStatus(status) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

export default function AdminApplicationsPage() {
  const [applications, setApplications] =
    useState(initialApplications);

  const [activeStatus, setActiveStatus] =
    useState('all');

  const [search, setSearch] =
    useState('');

  const [positionFilter, setPositionFilter] =
    useState('all');

  const [selectedApplication, setSelectedApplication] =
    useState(null);

  const positions = [
    ...new Set(
      applications.map(
        (application) => application.position
      )
    )
  ];

  const counts = {
    all: applications.length,
    new: applications.filter(
      (application) => application.status === 'new'
    ).length,
    reviewed: applications.filter(
      (application) => application.status === 'reviewed'
    ).length,
    interview: applications.filter(
      (application) => application.status === 'interview'
    ).length,
    hired: applications.filter(
      (application) => application.status === 'hired'
    ).length,
    rejected: applications.filter(
      (application) => application.status === 'rejected'
    ).length
  };

  const visibleApplications = applications.filter(
    (application) => {
      const matchesStatus =
        activeStatus === 'all' ||
        application.status === activeStatus;

      const searchValue =
        search.toLowerCase().trim();

      const matchesSearch =
        application.name
          .toLowerCase()
          .includes(searchValue) ||
        application.email
          .toLowerCase()
          .includes(searchValue) ||
        application.position
          .toLowerCase()
          .includes(searchValue);

      const matchesPosition =
        positionFilter === 'all' ||
        application.position === positionFilter;

      return (
        matchesStatus &&
        matchesSearch &&
        matchesPosition
      );
    }
  );

  function updateStatus(id, newStatus) {
    setApplications((current) =>
      current.map((application) =>
        application.id === id
          ? {
              ...application,
              status: newStatus
            }
          : application
      )
    );

    setSelectedApplication((current) =>
      current && current.id === id
        ? {
            ...current,
            status: newStatus
          }
        : current
    );
  }

  function deleteApplication(id) {
    const confirmed = window.confirm(
      'Are you sure you want to delete this application?'
    );

    if (!confirmed) {
      return;
    }

    setApplications((current) =>
      current.filter(
        (application) => application.id !== id
      )
    );

    setSelectedApplication(null);
  }

  return (
    <>
      <header className="adminTopbar">
        <div>
          <p className="adminEyebrow">
            CAREERS
          </p>

          <h1>Career Applications</h1>
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

        <div className="applicationAdminHeading">
          <div>
            <p className="adminEyebrow">
              APPLICATION MANAGEMENT
            </p>

            <h2>Applicants</h2>

            <p>
              Review and manage applications submitted
              through the Roswell Ale House careers page.
            </p>
          </div>
        </div>

        <div className="applicationStats">

          <div>
            <span>Total Applications</span>
            <strong>{counts.all}</strong>
          </div>

          <div>
            <span>New</span>
            <strong>{counts.new}</strong>
          </div>

          <div>
            <span>Interviews</span>
            <strong>{counts.interview}</strong>
          </div>

          <div>
            <span>Hired</span>
            <strong>{counts.hired}</strong>
          </div>

        </div>

        <section className="applicationPanel">

          <div className="applicationTabs">

            {[
              'all',
              'new',
              'reviewed',
              'interview',
              'hired',
              'rejected'
            ].map((status) => (
              <button
                key={status}
                className={
                  activeStatus === status
                    ? 'applicationTab active'
                    : 'applicationTab'
                }
                onClick={() =>
                  setActiveStatus(status)
                }
              >
                {formatStatus(status)}

                <span>
                  {counts[status]}
                </span>
              </button>
            ))}

          </div>

          <div className="applicationFilters">

            <input
              type="search"
              placeholder="Search name, email or position..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />

            <select
              value={positionFilter}
              onChange={(event) =>
                setPositionFilter(event.target.value)
              }
            >
              <option value="all">
                All Positions
              </option>

              {positions.map((position) => (
                <option
                  key={position}
                  value={position}
                >
                  {position}
                </option>
              ))}

            </select>

          </div>

          <div className="applicationTableWrapper">

            <table className="applicationTable">

              <thead>
                <tr>
                  <th>Applicant</th>
                  <th>Position</th>
                  <th>Applied</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>

                {visibleApplications.map(
                  (application) => (
                    <tr key={application.id}>

                      <td>
                        <div className="applicationApplicant">

                          <div className="applicationInitial">
                            {application.name.charAt(0)}
                          </div>

                          <div>
                            <strong>
                              {application.name}
                            </strong>

                            <span>
                              {application.email}
                            </span>
                          </div>

                        </div>
                      </td>

                      <td>
                        <span className="applicationPosition">
                          {application.position}
                        </span>
                      </td>

                      <td className="applicationDate">
                        {application.date}
                      </td>

                      <td>
                        <span
                          className={
                            `applicationStatus ${application.status}`
                          }
                        >
                          {formatStatus(
                            application.status
                          )}
                        </span>
                      </td>

                      <td>
                        <button
                          className="applicationViewButton"
                          onClick={() =>
                            setSelectedApplication(
                              application
                            )
                          }
                        >
                          View Application
                        </button>
                      </td>

                    </tr>
                  )
                )}

              </tbody>

            </table>

            {visibleApplications.length === 0 && (
              <div className="applicationEmpty">

                <h3>
                  No applications found
                </h3>

                <p>
                  Try changing the filters or search.
                </p>

              </div>
            )}

          </div>

        </section>

      </main>

      {selectedApplication && (

        <div
          className="applicationModalBackdrop"
          onMouseDown={() =>
            setSelectedApplication(null)
          }
        >

          <div
            className="applicationModal"
            onMouseDown={(event) =>
              event.stopPropagation()
            }
          >

            <div className="applicationModalHeader">

              <div>
                <p className="adminEyebrow">
                  CAREER APPLICATION
                </p>

                <h2>
                  {selectedApplication.name}
                </h2>

                <span>
                  Applied {selectedApplication.date}
                </span>
              </div>

              <button
                className="applicationModalClose"
                onClick={() =>
                  setSelectedApplication(null)
                }
                aria-label="Close"
              >
                ×
              </button>

            </div>

            <div className="applicationModalBody">

              <div className="applicationStatusControl">

                <label>
                  Application Status

                  <select
                    value={
                      selectedApplication.status
                    }
                    onChange={(event) =>
                      updateStatus(
                        selectedApplication.id,
                        event.target.value
                      )
                    }
                  >
                    {statuses.map((status) => (
                      <option
                        key={status}
                        value={status}
                      >
                        {formatStatus(status)}
                      </option>
                    ))}
                  </select>

                </label>

              </div>

              <div className="applicationDetailGrid">

                <div>
                  <span>Position</span>
                  <strong>
                    {selectedApplication.position}
                  </strong>
                </div>

                <div>
                  <span>Experience</span>
                  <strong>
                    {selectedApplication.experience}
                  </strong>
                </div>

                <div>
                  <span>Email</span>
                  <strong>
                    {selectedApplication.email}
                  </strong>
                </div>

                <div>
                  <span>Phone</span>
                  <strong>
                    {selectedApplication.phone}
                  </strong>
                </div>

              </div>

              <div className="applicationDetailSection">

                <span>Availability</span>

                <p>
                  {selectedApplication.availability}
                </p>

              </div>

              <div className="applicationDetailSection">

                <span>Applicant Message</span>

                <p>
                  {selectedApplication.message}
                </p>

              </div>

            </div>

            <div className="applicationModalFooter">

              <button
                className="applicationDeleteButton"
                onClick={() =>
                  deleteApplication(
                    selectedApplication.id
                  )
                }
              >
                Delete Application
              </button>

              <button
                className="applicationDoneButton"
                onClick={() =>
                  setSelectedApplication(null)
                }
              >
                Done
              </button>

            </div>

          </div>

        </div>
      )}

    </>
  );
}