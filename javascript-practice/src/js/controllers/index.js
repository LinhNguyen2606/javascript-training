import UserController from "./userController";

export default class Controller {
  constructor(model, view) {
    this.userController = new UserController(model, view);
  }

  init() {
    this.userController.init();
  }
}
