import { displayHomeTab } from "./displayHomeTab";
import { displayMenuTab } from "./displayMenuTab";
import { displayContactTab } from "./displayContactTab";

function resetPage() {
  let mainContentContainer = document.querySelector('.main-content-container');
  mainContentContainer.innerHTML = '';
}

export function pageLoad () {
  let contentContainer = document.querySelector('div#content');
  
  let navBar = document.createElement('div');
  navBar.classList.add('nav-bar');

  // Create and add home tab
  let home = document.createElement('div');
  home.classList.add('home-tab');
  home.textContent = 'Home';
  home.addEventListener('click', (e) => {
    resetPage();
    displayHomeTab();
  });
  navBar.appendChild(home);

  // Create and add menu tab
  let menu = document.createElement('div');
  menu.classList.add('menu-tab');
  menu.textContent = 'Menu';
  menu.addEventListener('click', (e) => {
    resetPage();
    displayMenuTab();
  });
  navBar.appendChild(menu);

  // Create and add contact tab
  let contact = document.createElement('div');
  contact.classList.add('contact-tab');
  contact.textContent = 'Contact';
  contact.addEventListener('click', (e) => {
    resetPage();
    displayContactTab();
  });
  navBar.appendChild(contact);

  // Create and add main-content container (holds tab content)
  let mainContentContainer = document.createElement('div');
  mainContentContainer.classList.add('main-content-container');

  contentContainer.appendChild(navBar);
  contentContainer.appendChild(mainContentContainer);

  displayHomeTab();
}