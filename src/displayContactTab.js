// import pizzaHeaderImg from './pizza.png';

export function displayContactTab() {
  console.log('displayContactTab works!');
  let content = document.createElement('div');
  content.classList.add('tab-content');

  // let pizzaImgElem = new Image();
  // pizzaImgElem.src = pizzaHeaderImg;
  // pizzaImgElem.classList.add('header-img');
  // content.appendChild(pizzaImgElem);

  let header = document.createElement('h1');
  header.textContent = 'Contact Us';
  content.appendChild(header);

  let description = document.createElement('p');
  description.textContent = 'We would love to hear from you.';
  content.appendChild(description);

  let form = document.createElement('form');
  form.innerHTML = `
    <label id='name'>Name: 
      <input type='text' name='name' placeholder='John Doe'>
    </label>
    <label id='email'>Email: 
      <input type='email' name='email' placeholder='john.doe@example.com'>
    </label>
  `;
  content.appendChild(form);

  let existingContainer = document.querySelector('.main-content-container');
  existingContainer.appendChild(content);
}