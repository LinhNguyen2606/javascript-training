import ModalView from "./modal";
import UserView from "./userView";

export default class View {
  constructor() {
    this.userView = new UserView();
    this.modal = new ModalView();
  }
}
