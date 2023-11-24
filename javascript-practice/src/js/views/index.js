import ModalView from "./modalView";
import UserView from "./userView";

export default class View {
  constructor() {
    this.userView = new UserView();
    this.modal = new ModalView();
  }
}
