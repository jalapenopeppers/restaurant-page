// import pizzaHeaderImg from './pizza.png';

export function displayMenuTab() {
  console.log('displayMenuTab works!');
  let content = document.createElement('div');
  content.classList.add('tab-content');

  // let pizzaImgElem = new Image();
  // pizzaImgElem.src = pizzaHeaderImg;
  // pizzaImgElem.classList.add('header-img');
  // content.appendChild(pizzaImgElem);

  let header = document.createElement('h1');
  header.textContent = 'Menu';
  content.appendChild(header);


  let menuItem1Header = document.createElement('h2');
  menuItem1Header.textContent = 'Cheese Pizza';
  content.appendChild(menuItem1Header);
  let menuItem1Description = document.createElement('p');
  menuItem1Description.textContent = 'Delicious pizza with mozzarella cheese.';
  content.appendChild(menuItem1Description);

  let menuItem2Header = document.createElement('h2');
  menuItem2Header.textContent = 'Pepperoni Pizza';
  content.appendChild(menuItem2Header);
  let menuItem2Description = document.createElement('p');
  menuItem2Description.textContent = 'Delicious pizza with mozzarella cheese and pepperoni slices.';
  content.appendChild(menuItem2Description);


  let existingContainer = document.querySelector('.main-content-container');
  existingContainer.appendChild(content);
}