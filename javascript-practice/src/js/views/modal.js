import { qs } from "../helpers/helper";
import { hideModal, showModal } from "../helpers/modalOperation";

class ModalView {
  constructor() {
    this.overlayEl = qs("#overlay");
    this.modalEl = qs(".modal");
    this.modalInputEl = qs("#modal__body-input");
    this.sidebarBtnEl = qs("#sidebar__btn");
    this.cancelIconEl = qs(".modal__close-icon");

    this.handleShowModal();
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
