import UserController from "./userController";

export default class Controller {
  constructor(service, view) {
    this.userController = new UserController(service, view);
  }
}
