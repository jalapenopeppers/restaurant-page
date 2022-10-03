// import pizzaHeaderImg from './pizza.png';

export function displayHomeTab() {
  console.log('displayHomeTab works!');
  let content = document.createElement('div');
  content.classList.add('tab-content');

  // let pizzaImgElem = new Image();
  // pizzaImgElem.src = pizzaHeaderImg;
  // pizzaImgElem.classList.add('header-img');
  // content.appendChild(pizzaImgElem);

  let header = document.createElement('h1');
  header.textContent = 'Welcome to the Best Pizza Restaurant';
  content.appendChild(header);

  let description = document.createElement('p');
  description.textContent = 'We make the best pizza ever.';
  content.appendChild(description);


  let existingContainer = document.querySelector('.main-content-container');
  existingContainer.appendChild(content);
}