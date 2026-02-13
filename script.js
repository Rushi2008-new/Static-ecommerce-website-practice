import products from './data.js';
import displayProducts from './render.js';
import {
  genderDropdownLogic,
  genderRadioLogic,
  ratingSlider,
  categoryLogic,
} from './filter.js';
const clearbtn = document.getElementById('clear-btn');
const productsDisplay = document.getElementById('productsDisplay');
const genderSelection = document.getElementById('gender-selection');
const genderRadios = document.querySelectorAll('input[name]');
const ratingInput = document.getElementById('rating-input');
const ratingOutput = document.getElementById('rating-output');
const categoryCheckboxes = document.querySelectorAll('.category-checkbox');
displayProducts(products);

genderDropdownLogic(products, genderSelection, displayProducts);

genderRadioLogic(genderRadios, products, displayProducts);

ratingSlider(ratingInput, products, displayProducts, ratingOutput);

categoryLogic(categoryCheckboxes, products, displayProducts);
clearbtn.addEventListener('click', () => {
  genderSelection.value = '';
  genderRadios.forEach((cur) => (cur.checked = false));
  ratingInput.value = 0;
  ratingOutput.textContent = 0;
  categoryCheckboxes.forEach((c) => (c.checked = false));
  displayProducts(products);
});
