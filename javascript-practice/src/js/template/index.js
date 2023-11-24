/**
 * The template of user table content item
 */
export const usersTableTemplate = (data) => {
  const users = data.map((user) => {
    const { id, avatar, userName, status, email } = user;

    return `
    <li class="table__content__item" data-id=${id}>
      <div class="table__content__infor">
        <img src="${avatar}" alt="user avatar" />
        <span class="primary__text">${userName}</span>
      </div>
      <div class="table__content__status ${
        status === true ? "active" : "not__active"
      }">
      <span>${status === true ? "Active" : "Not active"}</span>
      </div>
      <span class="table__content__email primary__text">${email}</span>
  </li>`;
  });

  return users;
};

/**
 * The template of user detailed information
 */
export const userDetailsTemplate = async (userData) => {
  const res = await userData;

  const { status, email, avatar, userName, lastVisited } = res.data;

  const html = `
  <div class="user__details">
    <section section class="user__details__header">
      <h3 class="primary__text">User information</h3>
      <div class="user__details__status ${
        status === true ? "active" : "not__active"
      }">
        <span>${status === true ? "Active" : "Not active"}</span>
      </div>
      <div class="user__details__header--icon">
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
  <div class="user__details__avatar">
    <img src="${avatar}" alt="user" />
  </div>
  <span class="user__details__username primary__text"
    >${userName}</span
  >
  <div>
    <div class="user__details__mail--icon">
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
    <span class="user__details__email primary__text"
      >${email === "" ? "Unknown" : email}</span
    >
  </div>
  <div>
    <div class="user__details__visited--icon">
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
    <span class="user__details__time primary__text"
      >${lastVisited === "" ? "Unknown" : lastVisited}</span
    >
  </div>
</div>
  `;

  return html;
};