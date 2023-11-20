import { hideModal, qs, showModal } from "../helpers";

class ModalView {
  constructor() {
    // Overlay covers the entire screen
    this.overlay = document.createElement("div");
    this.overlay.setAttribute("id", "overlay");
    document.body.appendChild(this.overlay);
    this.overlayEl = qs("#overlay");

    // The modal to add new user
    this.modalEl = qs(".modal");

    // user name input
    this.modalInputEl = qs("#username-input");

    // Add new button in the sidebar
    this.sidebarBtnEl = qs("#sidebar__btn");

    // Close icon to close the modal
    this.cancelIconEl = qs(".modal__close-icon");

    // Function to show the modal
    this.handleShowModal();

    // Function to close the modal
    this.handleHideModal();
  }

  /**
   * Handle showing the modal
   */
  handleShowModal() {
    //Event listener for sidebar button click
    this.sidebarBtnEl.addEventListener("click", () =>
      showModal(this.overlayEl, this.modalEl, this.modalInputEl)
    );
  }

  /**
   * Handle closing the modal
   */
  handleHideModal() {
    // Event listener for cancel button click
    this.cancelIconEl.addEventListener("click", () =>
      hideModal(this.overlayEl, this.modalEl)
    );
  }
}

export default ModalView;
