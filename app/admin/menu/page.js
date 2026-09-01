'use client';

import { useState } from 'react';
import {
  foodCategories,
  drinkCategories
} from '@/lib/siteData';


/* ========================================
   CONVERT PUBLIC MENU DATA
   INTO ADMIN MENU DATA
======================================== */

function convertMenuToAdminItems() {
  const foodItems = foodCategories.flatMap((category) =>
    category.items.map(([name, description, price], index) => ({
      id: `food-${category.id}-${index}`,
      type: 'food',
      category: category.name,
      categoryId: category.id,
      name,
      description,
      price: Number(price.replace('$', '')),
      available: true
    }))
  );

  const drinkItems = drinkCategories.flatMap((category) =>
    category.items.map(([name, description, price], index) => ({
      id: `drink-${category.id}-${index}`,
      type: 'drink',
      category: category.name,
      categoryId: category.id,
      name,
      description,
      price: Number(price.replace('$', '')),
      available: true
    }))
  );

  return [...foodItems, ...drinkItems];
}


/* ========================================
   ADMIN MENU PAGE
======================================== */

export default function AdminMenuPage() {

  const [items, setItems] = useState(
    convertMenuToAdminItems
  );

  const [activeType, setActiveType] =
    useState('food');

  const [activeCategory, setActiveCategory] =
    useState('All');

  const [showForm, setShowForm] =
    useState(false);

  const [editingId, setEditingId] =
    useState(null);


  /* ========================================
     CATEGORY NAMES
  ======================================== */

  const foodCategoryNames =
    foodCategories.map(
      (category) => category.name
    );

  const drinkCategoryNames =
    drinkCategories.map(
      (category) => category.name
    );


  /* ========================================
     FORM
  ======================================== */

  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    category: foodCategories[0].name,
    type: 'food',
    available: true
  });


  /* ========================================
     CURRENT CATEGORIES
  ======================================== */

  const categories =
    activeType === 'food'
      ? foodCategoryNames
      : drinkCategoryNames;


  /* ========================================
     FILTER ITEMS
  ======================================== */

  const visibleItems = items.filter(
    (item) => {

      const correctType =
        item.type === activeType;

      const correctCategory =
        activeCategory === 'All' ||
        item.category === activeCategory;

      return (
        correctType &&
        correctCategory
      );
    }
  );


  /* ========================================
     COUNTS
  ======================================== */

  const foodCount = items.filter(
    (item) => item.type === 'food'
  ).length;

  const drinkCount = items.filter(
    (item) => item.type === 'drink'
  ).length;

  const soldOutCount = items.filter(
    (item) => !item.available
  ).length;


  /* ========================================
     CHANGE FOOD / DRINK
  ======================================== */

  function changeType(type) {

    setActiveType(type);

    setActiveCategory('All');
  }


  /* ========================================
     OPEN ADD FORM
  ======================================== */

  function openAddForm() {

    setEditingId(null);

    setForm({
      name: '',
      description: '',
      price: '',
      type: activeType,

      category:
        activeType === 'food'
          ? foodCategoryNames[0]
          : drinkCategoryNames[0],

      available: true
    });

    setShowForm(true);
  }


  /* ========================================
     OPEN EDIT FORM
  ======================================== */

  function openEditForm(item) {

    setEditingId(item.id);

    setForm({
      name: item.name,
      description: item.description,
      price: item.price.toString(),
      category: item.category,
      type: item.type,
      available: item.available
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
     HANDLE FORM INPUT
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
     CHANGE MENU TYPE IN FORM
  ======================================== */

  function handleMenuTypeChange(event) {

    const type = event.target.value;

    setForm((current) => ({
      ...current,

      type,

      category:
        type === 'food'
          ? foodCategoryNames[0]
          : drinkCategoryNames[0]
    }));
  }


  /* ========================================
     SAVE ITEM
  ======================================== */

  function saveItem(event) {

    event.preventDefault();

    const cleanedName =
      form.name.trim();

    const cleanedDescription =
      form.description.trim();

    const numericPrice =
      Number(form.price);


    if (
      !cleanedName ||
      !cleanedDescription ||
      !form.category ||
      form.price === '' ||
      Number.isNaN(numericPrice) ||
      numericPrice < 0
    ) {
      return;
    }


    /* EDIT EXISTING ITEM */

    if (editingId !== null) {

      setItems((current) =>
        current.map((item) =>

          item.id === editingId

            ? {
                ...item,

                name: cleanedName,

                description:
                  cleanedDescription,

                price:
                  numericPrice,

                category:
                  form.category,

                type:
                  form.type,

                available:
                  form.available
              }

            : item
        )
      );
    }


    /* ADD NEW ITEM */

    else {

      const newItem = {

        id: `new-${Date.now()}`,

        name:
          cleanedName,

        description:
          cleanedDescription,

        price:
          numericPrice,

        category:
          form.category,

        type:
          form.type,

        available:
          form.available
      };


      setItems((current) => [
        ...current,
        newItem
      ]);
    }


    setActiveType(
      form.type
    );

    setActiveCategory(
      'All'
    );

    closeForm();
  }


  /* ========================================
     DELETE ITEM
  ======================================== */

  function deleteItem(id) {

    const confirmed =
      window.confirm(
        'Are you sure you want to delete this menu item?'
      );

    if (!confirmed) {
      return;
    }

    setItems((current) =>
      current.filter(
        (item) => item.id !== id
      )
    );
  }


  /* ========================================
     AVAILABLE / SOLD OUT
  ======================================== */

  function toggleAvailability(id) {

    setItems((current) =>
      current.map((item) =>

        item.id === id

          ? {
              ...item,
              available:
                !item.available
            }

          : item
      )
    );
  }


  /* ========================================
     PAGE
  ======================================== */

  return (
    <>

      {/* ==================================
          TOP BAR
      ================================== */}

      <header className="adminTopbar">

        <div>

          <p className="adminEyebrow">
            RESTAURANT CONTENT
          </p>

          <h1>
            Menu Management
          </h1>

        </div>


        <div className="adminAccount">

          <div className="adminAvatar">
            A
          </div>

          <div>

            <strong>
              Administrator
            </strong>

            <span>
              Admin Portal
            </span>

          </div>

        </div>

      </header>


      {/* ==================================
          MAIN CONTENT
      ================================== */}

      <main className="adminContent">


        {/* ==================================
            PAGE HEADING
        ================================== */}

        <div className="menuAdminHeading">

          <div>

            <p className="adminEyebrow">
              MENU MANAGEMENT
            </p>

            <h2>
              Food & Drinks
            </h2>

            <p>
              Add, edit and manage the menu
              shown on the Roswell Ale House
              website.
            </p>

          </div>


          <button
            className="menuAddButton"
            onClick={openAddForm}
          >
            + Add Menu Item
          </button>

        </div>


        {/* ==================================
            STAT CARDS
        ================================== */}

        <div className="menuAdminStats">

          <div>

            <span>
              Total Items
            </span>

            <strong>
              {items.length}
            </strong>

          </div>


          <div>

            <span>
              Food
            </span>

            <strong>
              {foodCount}
            </strong>

          </div>


          <div>

            <span>
              Drinks
            </span>

            <strong>
              {drinkCount}
            </strong>

          </div>


          <div>

            <span>
              Sold Out
            </span>

            <strong>
              {soldOutCount}
            </strong>

          </div>

        </div>


        {/* ==================================
            MENU MANAGEMENT PANEL
        ================================== */}

        <section className="menuManagementPanel">


          {/* FOOD / DRINK TABS */}

          <div className="menuTypeTabs">

            <button
              className={
                activeType === 'food'
                  ? 'menuTypeTab active'
                  : 'menuTypeTab'
              }

              onClick={() =>
                changeType('food')
              }
            >

              Food Menu

              <span>
                {foodCount}
              </span>

            </button>


            <button
              className={
                activeType === 'drink'
                  ? 'menuTypeTab active'
                  : 'menuTypeTab'
              }

              onClick={() =>
                changeType('drink')
              }
            >

              Drinks Menu

              <span>
                {drinkCount}
              </span>

            </button>

          </div>


          {/* ==================================
              CATEGORY FILTER
          ================================== */}

          <div className="menuCategoryFilters">

            <button
              className={
                activeCategory === 'All'
                  ? 'menuCategoryButton active'
                  : 'menuCategoryButton'
              }

              onClick={() =>
                setActiveCategory('All')
              }
            >
              All
            </button>


            {categories.map(
              (category) => (

                <button
                  key={category}

                  className={
                    activeCategory ===
                    category

                      ? 'menuCategoryButton active'

                      : 'menuCategoryButton'
                  }

                  onClick={() =>
                    setActiveCategory(
                      category
                    )
                  }
                >

                  {category}

                </button>
              )
            )}

          </div>


          {/* ==================================
              MENU TABLE
          ================================== */}

          <div className="menuAdminTableWrapper">

            <table className="menuAdminTable">

              <thead>

                <tr>

                  <th>
                    Item
                  </th>

                  <th>
                    Category
                  </th>

                  <th>
                    Price
                  </th>

                  <th>
                    Status
                  </th>

                  <th>
                    Actions
                  </th>

                </tr>

              </thead>


              <tbody>

                {visibleItems.map(
                  (item) => (

                    <tr key={item.id}>


                      {/* ITEM */}

                      <td>

                        <div className="menuItemAdminInfo">

                          <strong>
                            {item.name}
                          </strong>

                          <span>
                            {item.description}
                          </span>

                        </div>

                      </td>


                      {/* CATEGORY */}

                      <td>

                        <span className="menuCategoryLabel">
                          {item.category}
                        </span>

                      </td>


                      {/* PRICE */}

                      <td className="menuPrice">

                        $
                        {item.price.toFixed(2)}

                      </td>


                      {/* AVAILABILITY */}

                      <td>

                        <button
                          className={
                            item.available

                              ? 'menuAvailability available'

                              : 'menuAvailability unavailable'
                          }

                          onClick={() =>
                            toggleAvailability(
                              item.id
                            )
                          }
                        >

                          <span></span>

                          {item.available
                            ? 'Available'
                            : 'Sold Out'}

                        </button>

                      </td>


                      {/* ACTIONS */}

                      <td>

                        <div className="menuRowActions">

                          <button
                            className="menuEditButton"

                            onClick={() =>
                              openEditForm(
                                item
                              )
                            }
                          >
                            Edit
                          </button>


                          <button
                            className="menuDeleteButton"

                            onClick={() =>
                              deleteItem(
                                item.id
                              )
                            }
                          >
                            Delete
                          </button>

                        </div>

                      </td>

                    </tr>
                  )
                )}

              </tbody>

            </table>


            {/* EMPTY STATE */}

            {visibleItems.length === 0 && (

              <div className="menuEmptyState">

                <h3>
                  No menu items
                </h3>

                <p>
                  There are currently no
                  items in this category.
                </p>

              </div>

            )}

          </div>

        </section>

      </main>


      {/* ==================================
          ADD / EDIT MODAL
      ================================== */}

      {showForm && (

        <div
          className="menuModalBackdrop"

          onMouseDown={
            closeForm
          }
        >

          <div
            className="menuModal"

            onMouseDown={(event) =>
              event.stopPropagation()
            }
          >


            {/* MODAL HEADER */}

            <div className="menuModalHeader">

              <div>

                <p className="adminEyebrow">
                  MENU ITEM
                </p>

                <h2>

                  {editingId !== null
                    ? 'Edit Menu Item'
                    : 'Add Menu Item'}

                </h2>

              </div>


              <button
                className="menuModalClose"

                onClick={
                  closeForm
                }

                aria-label="Close"
              >
                ×
              </button>

            </div>


            {/* ==================================
                FORM
            ================================== */}

            <form
              className="menuItemForm"

              onSubmit={
                saveItem
              }
            >


              {/* MENU TYPE + CATEGORY */}

              <div className="menuFormRow">


                <label>

                  Menu

                  <select
                    value={
                      form.type
                    }

                    onChange={
                      handleMenuTypeChange
                    }
                  >

                    <option value="food">
                      Food
                    </option>

                    <option value="drink">
                      Drinks
                    </option>

                  </select>

                </label>


                <label>

                  Category

                  <select
                    name="category"

                    value={
                      form.category
                    }

                    onChange={
                      handleFormChange
                    }
                  >

                    {(form.type === 'food'
                      ? foodCategoryNames
                      : drinkCategoryNames
                    ).map(
                      (category) => (

                        <option
                          value={category}
                          key={category}
                        >
                          {category}
                        </option>

                      )
                    )}

                  </select>

                </label>

              </div>


              {/* ITEM NAME */}

              <label>

                Item Name

                <input
                  name="name"

                  value={
                    form.name
                  }

                  onChange={
                    handleFormChange
                  }

                  placeholder="Example: Ale House Wings"

                  required
                />

              </label>


              {/* DESCRIPTION */}

              <label>

                Description

                <textarea
                  name="description"

                  value={
                    form.description
                  }

                  onChange={
                    handleFormChange
                  }

                  placeholder="Describe the menu item..."

                  rows="4"

                  required
                />

              </label>


              {/* PRICE */}

              <label>

                Price

                <div className="menuPriceInput">

                  <span>
                    $
                  </span>

                  <input
                    type="number"

                    name="price"

                    value={
                      form.price
                    }

                    onChange={
                      handleFormChange
                    }

                    min="0"

                    step="0.01"

                    placeholder="0.00"

                    required
                  />

                </div>

              </label>


              {/* AVAILABILITY */}

              <label className="menuAvailabilityCheckbox">

                <input
                  type="checkbox"

                  name="available"

                  checked={
                    form.available
                  }

                  onChange={
                    handleFormChange
                  }
                />

                <div>

                  <strong>
                    Item is available
                  </strong>

                  <span>
                    Uncheck this to mark
                    the item as sold out.
                  </span>

                </div>

              </label>


              {/* BUTTONS */}

              <div className="menuFormActions">

                <button
                  type="button"

                  className="menuCancelButton"

                  onClick={
                    closeForm
                  }
                >
                  Cancel
                </button>


                <button
                  type="submit"

                  className="menuSaveButton"
                >

                  {editingId !== null
                    ? 'Save Changes'
                    : 'Add Item'}

                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </>
  );
}