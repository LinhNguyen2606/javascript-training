import ModalView from "./modalView";
import UserDetailsView from "./userDetailsView";
import UserView from "./userView";

export default class View {
  constructor() {
    this.userView = new UserView();
    this.modal = new ModalView();
    this.userDetailsView = new UserDetailsView();
  }
}
