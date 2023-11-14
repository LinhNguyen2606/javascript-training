import Controller from "./controllers/index";
import Model from "./models/index";
import View from "./views/index";

export default class App {
  async start() {
    const controller = new Controller(new Model(), new View());
    await controller.init();
  }
}
