import {
  $createElement,
  $delegate,
  $hideModal,
  $on,
  $qs,
  $showModal,
} from "../helpers";

class ModalView {
  constructor() {
    // Overlay covers the entire screen
    this.overlay = $createElement("div");
    this.overlay.setAttribute("id", "overlay");
    document.body.appendChild(this.overlay);
    this.overlayEl = $qs("#overlay");

    // The modal to add new user
    this.modalEl = $qs(".modal");

    // The modal to delete user
    this.modalDeleteEl = $qs(".modal__delete");

    // user name input
    this.modalInputEl = $qs("#username-input");

    // Add new button in the sidebar
    this.sidebarBtnEl = $qs("#sidebar__btn");

    // Close icon to close the modal
    this.cancelIconEl = $qs(".modal__close-icon");

    // Cancel icon to close the delete modal
    this.cancelBtnModalDeleteEl = $qs(".cancel__btn");

    // Function to show the modal
    this.handleShowModal();

    // Function to close the modal
    this.handleHideModal();

    // Function to close the delete modal
    this.handleHideDeleteModal();
  }

  /**
   * Handle showing the modal
   */
  handleShowModal = () => {
    //Event listener for sidebar button click
    $on(this.sidebarBtnEl, "click", () =>
      $showModal(this.overlayEl, this.modalEl, this.modalInputEl)
    );
  };

  /**
   * Handle closing the modal
   */
  handleHideModal = () => {
    // Event listener for cancel button click
    $on(this.cancelIconEl, "click", () =>
      $hideModal(this.overlayEl, this.modalEl)
    );
  };

  /**
   * Handle closing the modal
   */
  handleHideDeleteModal = () => {
    $on(this.cancelBtnModalDeleteEl, "click", (e) => {
      e.preventDefault();
      $hideModal(this.overlayEl, this.modalDeleteEl);
    });
  };
}

export default ModalView;
