import {
  createElement,
  delegate,
  hideModal,
  on,
  qs,
  showModal,
} from "../helpers";

class ModalView {
  constructor() {
    // Overlay covers the entire screen
    this.overlay = createElement("div", "overlay");
    document.body.appendChild(this.overlay);
    this.overlayEl = qs(".overlay");

    // The modal to add new user and delete user
    this.modalEl = qs(".modal");
    this.modalDeleteEl = qs(".modal-delete");

    // user name input
    this.modalInputEl = qs("#username-input");

    // Add new button in the sidebar
    this.sidebarBtnEl = qs(".btn__sidebar");

    // Close icon to close the modal
    this.cancelIconEl = qs(".modal__header--icon");

    // Cancel icon to close the delete modal
    this.cancelBtnModalDeleteEl = qs(".btn__cancel");

    // Container to wrap  edit form
    this.editContainerEl = qs(".edit__wrapper");

    // Function to show and close the add modal
    this.bindEventShowModalAddUser();
    this.bindEventHideModalAddUser();

    // Function to show and hide the delete modal
    this.bindEventShowDeleteModal();
    this.bindEventHideModalDelete();
  }

  /**
   * Handle showing the modal
   */
  bindEventShowModalAddUser = () => {
    on(this.sidebarBtnEl, "click", () => {
      showModal(this.overlayEl, this.modalEl, this.modalInputEl);
    });
  };

  /**
   * Handle closing the modal
   */
  bindEventHideModalAddUser = () => {
    on(this.cancelIconEl, "click", () => {
      hideModal(this.overlayEl, this.modalEl);
      this.modalInputEl.value = "";
    });
  };

  /**
   * Handle showing the delete modal
   */
  bindEventShowDeleteModal = () => {
    delegate(this.editContainerEl, ".btn__edit--delete", "click", () => {
      this.overlayEl.style.display = "block";
      this.modalDeleteEl.style.display = "block";
    });
  };

  /**
   * Handle closing the modal
   */
  bindEventHideModalDelete = () => {
    on(this.cancelBtnModalDeleteEl, "click", (e) => {
      e.preventDefault();
      hideModal(this.overlayEl, this.modalDeleteEl);
    });
  };
}

export default ModalView;
