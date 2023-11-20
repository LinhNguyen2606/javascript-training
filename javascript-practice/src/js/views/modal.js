import { qs } from "../helpers/helper";
import { hideModal, showModal } from "../helpers/modalOperation";

class ModalView {
  constructor() {
    // Overlay covers the entire screen
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

  handleShowModal() {
    //Event listener for sidebar button click
    this.sidebarBtnEl.addEventListener("click", () =>
      showModal(this.overlayEl, this.modalEl, this.modalInputEl)
    );
  }

  handleHideModal() {
    // Event listener for cancel button click
    this.cancelIconEl.addEventListener("click", () =>
      hideModal(this.overlayEl, this.modalEl)
    );
  }
}

export default ModalView;
