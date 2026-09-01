'use client';

import { useState } from 'react';
import {
  galleryMedia as initialGalleryMedia
} from '@/lib/siteData';

const categories = [
  'Restaurant',
  'Food',
  'Drinks',
  'Sports',
  'Events',
  'Branding',
  'Other'
];

const emptyForm = {
  title: '',
  category: 'Restaurant',
  type: 'image',
  src: '',
  poster: '',
  visible: true,
  featured: false
};

export default function AdminGalleryPage() {
  const [media, setMedia] = useState(() =>
    initialGalleryMedia.map((item) => ({ ...item }))
  );

  const [filter, setFilter] = useState('All');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);

  const visibleCount = media.filter(
    (item) => item.visible
  ).length;

  const featuredCount = media.filter(
    (item) => item.featured && item.visible
  ).length;

  const imageCount = media.filter(
    (item) => item.type === 'image'
  ).length;

  const videoCount = media.filter(
    (item) => item.type === 'video'
  ).length;

  const availableCategories = [
    'All',
    ...new Set(
      media.map((item) => item.category)
    )
  ];

  const filteredMedia = media.filter(
    (item) =>
      filter === 'All' ||
      item.category === filter
  );

  function openAddForm() {
    setEditingId(null);

    setForm({
      ...emptyForm
    });

    setShowForm(true);
  }

  function openEditForm(item) {
    setEditingId(item.id);

    setForm({
      title: item.title,
      category: item.category,
      type: item.type,
      src: item.src,
      poster: item.poster || '',
      visible: item.visible,
      featured: item.featured
    });

    setShowForm(true);
  }

  function closeForm() {
    setShowForm(false);
    setEditingId(null);
  }

  function handleChange(event) {
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

  function saveMedia(event) {
    event.preventDefault();

    const title = form.title.trim();
    const src = form.src.trim();
    const poster = form.poster.trim();

    if (!title || !src) {
      return;
    }

    if (editingId !== null) {
      setMedia((current) =>
        current.map((item) =>
          item.id === editingId
            ? {
                ...item,
                title,
                category: form.category,
                type: form.type,
                src,
                poster,
                visible: form.visible,
                featured: form.featured
              }
            : item
        )
      );
    } else {
      const newItem = {
        id: `media-${Date.now()}`,
        title,
        category: form.category,
        type: form.type,
        src,
        poster,
        visible: form.visible,
        featured: form.featured
      };

      setMedia((current) => [
        ...current,
        newItem
      ]);
    }

    closeForm();
  }

  function toggleVisible(id) {
    setMedia((current) =>
      current.map((item) => {
        if (item.id !== id) {
          return item;
        }

        const newVisible = !item.visible;

        return {
          ...item,
          visible: newVisible,
          featured: newVisible
            ? item.featured
            : false
        };
      })
    );
  }

  function toggleFeatured(id) {
    setMedia((current) =>
      current.map((item) => {
        if (item.id !== id) {
          return item;
        }

        if (!item.featured) {
          return {
            ...item,
            featured: true,
            visible: true
          };
        }

        return {
          ...item,
          featured: false
        };
      })
    );
  }

  function deleteMedia(id) {
    const confirmed = window.confirm(
      'Delete this gallery item?'
    );

    if (!confirmed) {
      return;
    }

    setMedia((current) =>
      current.filter(
        (item) => item.id !== id
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

          <h1>Gallery Management</h1>
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

        <div className="galleryAdminHeading">

          <div>
            <p className="adminEyebrow">
              PHOTOS & VIDEO
            </p>

            <h2>Gallery</h2>

            <p>
              Manage the photos and videos displayed
              in the Roswell Ale House gallery.
            </p>
          </div>

          <button
            className="galleryAddButton"
            onClick={openAddForm}
          >
            + Add Media
          </button>

        </div>

        <div className="galleryAdminStats">

          <div>
            <span>Total Media</span>
            <strong>{media.length}</strong>
          </div>

          <div>
            <span>Visible</span>
            <strong>{visibleCount}</strong>
          </div>

          <div>
            <span>Images / Videos</span>

            <strong>
              {imageCount} / {videoCount}
            </strong>
          </div>

          <div>
            <span>Featured</span>
            <strong>{featuredCount}</strong>
          </div>

        </div>

        <section className="galleryAdminPanel">

          <div className="galleryAdminFilters">

            {availableCategories.map(
              (category) => (

                <button
                  key={category}
                  className={
                    filter === category
                      ? 'galleryFilterButton active'
                      : 'galleryFilterButton'
                  }
                  onClick={() =>
                    setFilter(category)
                  }
                >
                  {category}
                </button>

              )
            )}

          </div>

          {filteredMedia.length === 0 ? (

            <div className="galleryAdminEmpty">

              <h3>No media found</h3>

              <p>
                Add a gallery item to get started.
              </p>

            </div>

          ) : (

            <div className="galleryAdminGrid">

              {filteredMedia.map((item) => (

                <article
                  key={item.id}
                  className={
                    item.visible
                      ? 'galleryAdminCard'
                      : 'galleryAdminCard hidden'
                  }
                >

                  <div className="galleryAdminPreview">

                    {item.type === 'video' ? (

                      <video
                        src={item.src}
                        poster={
                          item.poster ||
                          undefined
                        }
                        muted
                        playsInline
                        preload="metadata"
                      />

                    ) : (

                      <img
                        src={item.src}
                        alt={item.title}
                      />

                    )}

                    <span className="galleryMediaType">
                      {item.type}
                    </span>

                    {item.featured && (
                      <span className="galleryAdminFeatured">
                        ★ Featured
                      </span>
                    )}

                  </div>

                  <div className="galleryAdminCardBody">

                    <div className="galleryAdminCategory">
                      {item.category}
                    </div>

                    <h3>{item.title}</h3>

                    <p className="galleryAdminPath">
                      {item.src}
                    </p>

                    <div className="galleryAdminControls">

                      <button
                        className={
                          item.visible
                            ? 'galleryVisibility active'
                            : 'galleryVisibility'
                        }
                        onClick={() =>
                          toggleVisible(item.id)
                        }
                      >
                        {item.visible
                          ? '● Visible'
                          : '○ Hidden'}
                      </button>

                      <button
                        className={
                          item.featured
                            ? 'galleryFeature active'
                            : 'galleryFeature'
                        }
                        onClick={() =>
                          toggleFeatured(item.id)
                        }
                      >
                        {item.featured
                          ? '★ Featured'
                          : '☆ Feature'}
                      </button>

                    </div>

                    <div className="galleryAdminActions">

                      <button
                        className="galleryEditButton"
                        onClick={() =>
                          openEditForm(item)
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="galleryDeleteButton"
                        onClick={() =>
                          deleteMedia(item.id)
                        }
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          )}

        </section>

        <div className="galleryAdminNotice">

          <strong>
            Local media management
          </strong>

          <p>
            Add Media currently references files
            already inside the public folder. Real
            file uploads will be added when cloud
            storage is connected.
          </p>

        </div>

      </main>

      {showForm && (

        <div
          className="galleryModalBackdrop"
          onMouseDown={closeForm}
        >

          <div
            className="galleryModal"
            onMouseDown={(event) =>
              event.stopPropagation()
            }
          >

            <div className="galleryModalHeader">

              <div>
                <p className="adminEyebrow">
                  GALLERY MEDIA
                </p>

                <h2>
                  {editingId !== null
                    ? 'Edit Media'
                    : 'Add Media'}
                </h2>
              </div>

              <button
                type="button"
                className="galleryModalClose"
                onClick={closeForm}
                aria-label="Close"
              >
                ×
              </button>

            </div>

            <form
              className="galleryEditForm"
              onSubmit={saveMedia}
            >

              <label>
                Title

                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Example: Game Day"
                  required
                />
              </label>

              <div className="galleryFormRow">

                <label>
                  Media Type

                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                  >
                    <option value="image">
                      Image
                    </option>

                    <option value="video">
                      Video
                    </option>
                  </select>

                </label>

                <label>
                  Category

                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                  >

                    {categories.map(
                      (category) => (

                        <option
                          key={category}
                          value={category}
                        >
                          {category}
                        </option>

                      )
                    )}

                  </select>

                </label>

              </div>

              <label>
                Public File Path

                <input
                  name="src"
                  value={form.src}
                  onChange={handleChange}
                  placeholder="/restaurant-photo.jpg"
                  required
                />

                <small>
                  The file must already exist
                  inside the public folder.
                </small>
              </label>

              {form.type === 'video' && (

                <label>
                  Video Poster Path

                  <input
                    name="poster"
                    value={form.poster}
                    onChange={handleChange}
                    placeholder="/video-poster.jpg"
                  />

                  <small>
                    Optional preview image for
                    the video.
                  </small>
                </label>

              )}

              <div className="galleryFormPreview">

                <span>PREVIEW</span>

                {form.src ? (

                  form.type === 'video' ? (

                    <video
                      src={form.src}
                      poster={
                        form.poster ||
                        undefined
                      }
                      controls
                      muted
                      playsInline
                    />

                  ) : (

                    <img
                      src={form.src}
                      alt="Media preview"
                    />

                  )

                ) : (

                  <div className="galleryNoPreview">
                    Enter a public file path
                  </div>

                )}

              </div>

              <label className="galleryCheckbox">

                <input
                  type="checkbox"
                  name="visible"
                  checked={form.visible}
                  onChange={handleChange}
                />

                <div>
                  <strong>
                    Show on website
                  </strong>

                  <span>
                    Visible media appears in the
                    customer gallery.
                  </span>
                </div>

              </label>

              <label className="galleryCheckbox">

                <input
                  type="checkbox"
                  name="featured"
                  checked={form.featured}
                  onChange={handleChange}
                />

                <div>
                  <strong>
                    Featured media
                  </strong>

                  <span>
                    Give this item additional
                    prominence in the gallery.
                  </span>
                </div>

              </label>

              <div className="galleryFormActions">

                <button
                  type="button"
                  className="galleryCancelButton"
                  onClick={closeForm}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="gallerySaveButton"
                >
                  {editingId !== null
                    ? 'Save Changes'
                    : 'Add Media'}
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </>
  );
}