import { qs } from "./selectors";

export const toggleSidebar = () => {
  const sidebar = qs(".sidebar");
  sidebar.classList.toggle("sidebar--hidden");
};

const menuToggle = qs(".menu__toggle");
menuToggle.addEventListener("click", toggleSidebar);
