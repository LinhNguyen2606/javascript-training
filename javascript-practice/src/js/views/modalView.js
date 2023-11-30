import { $createElement, $hideModal, $qs, $showModal } from "../helpers";

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
    this.modalDeleteEl = $qs(".modal-delete");

    // user name input
    this.modalInputEl = $qs("#username-input");

    // Add new button in the sidebar
    this.sidebarBtnEl = $qs(".btn__sidebar");

    // Close icon to close the modal
    this.cancelIconEl = $qs(".modal__header--icon");

    // Cancel icon to close the delete modal
    this.cancelBtnModalDeleteEl = $qs(".btn__cancel");

    // Container to wrap  edit form
    this.editContainerEl = $qs(".edit__wrapper");

    // Function to show the modal
    this.bindEventShowModalAddUser();

    // Function to close the modal
    this.bindEventHideModalAddUser();

    // Function to close the delete modal
    this.bindEventHideModalDelete();
  }

  /**
   * Handle showing the modal
   */
  bindEventShowModalAddUser = () => {
    $showModal(
      this.sidebarBtnEl,
      this.overlayEl,
      this.modalEl,
      this.modalInputEl
    );
  };

  /**
   * Handle closing the modal
   */
  bindEventHideModalAddUser = () => {
    $hideModal(this.cancelIconEl, this.overlayEl, this.modalEl);
  };

  /**
   * Handle closing the modal
   */
  bindEventHideModalDelete = () => {
    $hideModal(this.cancelBtnModalDeleteEl, this.overlayEl, this.modalEl);
  };
}

export default ModalView;
