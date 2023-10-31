// Nav bar open and close
const openMenu = document.querySelector(".header-left-section"),
  closeMenu = document.querySelector(".close-menu"),
  sidebarNav = document.querySelector(".sidebar-nav");

openMenu.addEventListener("click", () => {
  sidebarNav.classList.add("open-nav");
});

closeMenu.addEventListener("click", () => {
  sidebarNav.classList.remove("open-nav");
});
