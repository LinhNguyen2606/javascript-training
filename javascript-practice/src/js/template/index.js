import { convertDate } from "../helpers";

/**
 * The template of user table content item
 *  @param {object} data The user's data
 */
export const usersTableTemplate = (data) => {
  let users = "";
  if (data && data.length) {
    data.forEach((user) => {
      users += userTemplate(user);
    });
  }
  return users;
};

/**
 * The template of user table content item
 *  @param {object} data The user's data
 */
const userTemplate = (data) => {
  const { id, avatar, userName, isActive, email } = data;

  return `<li class="table__content-item" data-id=${id}>
  <div class="table__content-info">
    <img src="${avatar}" alt="user avatar" />
    <span class="primary__text">${userName}</span>
  </div>
  <div class="table__content--status ${isActive ? "active" : "not__active"}">
  <span>${isActive ? "Active" : "Not active"}</span>  
  </div>
  <span class="table__content__email primary__text">${email}</span>
</li>`;
};

/**
 * The template of user detailed information
 * @param {object} data The data of user
 */
export const userDetailsTemplate = (data) => {
  let { isActive, email, avatar, userName, lastVisited, id } = data;
  lastVisited = convertDate();

  const html = `
  <div class="user">
    <section section class="user__header">
      <h3 class="primary__text">User information</h3>
      <div class="user__header--status ${isActive ? "active" : "not__active"}">
        <span>${isActive ? "Active" : "Not active"}</span>
      </div>
      <div class="user__header--icon" data-id=${id}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
        <path
          d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
        />
        </svg>
      </div>
    </section>
  <div class="user__avatar">
    <img src="${avatar}" alt="user" />
  </div>
  <span class="user__username primary__text"
    >${userName}</span
  >
  <div>
    <div class="user__mail--icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
      >
        <path
          d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
        />
      </svg>
      <span class="primary__text">Email:</span>
    </div>
    <span class="user__email-text primary__text"
      >${email ? email : "Unknown"}</span
    >
  </div>
  <div>
    <div class="user__visited--icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
      >
        <path
          d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
        />
      </svg>
      <span class="primary__text">Last visited:</span>
    </div>
    <span class="user__time-text primary__text"
      >${lastVisited ? lastVisited : "Unknown"}</span
    >
  </div>
</div>
  `;
  return html;
};

/**
 * The template of user detailed information
 * @param {object} data The data of user
 */
export const displaysUserEditInfoTemplate = (data) => {
  const {
    isActive = false,
    email,
    avatar,
    userName,
    lastVisited,
    registered,
    detailDescUser,
  } = data;

  const html = `
  <div class="edit">
  <div class="edit__header">
    <div class="edit__header--icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512"
      >
        <path
          d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
        />
      </svg>
    </div>
    <span class="primary__text">General</span>
  </div>

  <div class="btn__edit">
    <button class="btn btn--primary btn__edit--delete">Delete</button>
    <button class="btn btn--primary btn__edit--save">Save</button>
  </div>

  <form id="edit-form">
    <div class="row">
      <label>Full Name</label>
      <input type="text" name="fullName" id="username" value="${userName}" />
    </div>

    <div class="row">
      <label>Email</label>
      <input type="email" name="email" id="email" value="${email}" />
    </div>

    <div class="row">
      <label>Avatar</label>
      <div class="avatar">
        <div>
          <img class="avatar-img" src="${avatar}" alt="User Avatar" />
        </div>
        <div class="avatar__upload">
          <label for="file-input" class="primary__text">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path
            d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"
          />
        </svg>
            Upload new photo
          </label>
          <input id="file-input" type="file">
      </div>

      </div>
    </div>

    <div class="row">
      <label>Status</label>
      <input type="checkbox" name="status" ${
        isActive && "checked"
      }  id="statusCheckbox"/>
      <div class="row__status ${
        isActive ? "active" : "not__active"
      }" id="statusDisplay">
        <span>${isActive ? "Active" : "Not active"}</span>
      </div>
    </div>

    <div class="row">
      <label>Registered</label>
      <span>${registered ? registered : "Unknown"}</span>
    </div>

    <div class="row">
      <label>Last visited</label>
      <span>${lastVisited ? lastVisited : "Unknown"}</span>
    </div>

    <div class="row">
      <label>Details</label>
      <textarea id="details" name="details" rows="7" cols="40">
        ${detailDescUser}
      </textarea>
    </div>
  </form>
</div>
  `;
  return html;
};
