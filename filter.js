export function genderDropdownLogic(
    products,
    genderSelection,
    displayProducts
  ) {
    genderSelection.addEventListener('change', (e) => {
      const selectedValue = e.target.value;
  
      const filteredProducts = products.filter(
        (curr) => curr.gender === selectedValue
      );
  
      displayProducts(filteredProducts);
  
      if (selectedValue === '') {
        displayProducts(products);
      }
    });
  }
  
  export function genderRadioLogic(genderRadios, products, displayProducts) {
    genderRadios.forEach((currentRadio) => {
      currentRadio.addEventListener('change', (e) => {
        const selectedGender = e.target.value;
        console.log(selectedGender);
        const filteredData = products.filter((p) => p.gender === selectedGender);
        displayProducts(filteredData);
      });
    });
  }
  export function ratingSlider(
    ratingInput,
    products,
    displayProducts,
    ratingOutput
  ) {
    ratingInput.addEventListener('change', (e) => {
      const currentValue = Number(e.target.value);
      ratingOutput.innerText = currentValue;
      const filteredProducts = products.filter((p) => p.rating >= currentValue);
      displayProducts(filteredProducts);
    });
  }
  
  export function categoryLogic(categoryCheckboxes, products, displayProducts) {
    categoryCheckboxes.forEach((current) => {
      current.addEventListener('change', () => {
        const selectedCategory = [];
        categoryCheckboxes.forEach((curentCheckbox) => {
          if (curentCheckbox.checked) {
            selectedCategory.push(curentCheckbox.value);
          }
        });
        if (selectedCategory.length === 0) {
          displayProducts(products);
          return;
        }
        const filteredProducts = products.filter((currentProduct) => {
          return selectedCategory.includes(currentProduct.category);
        });
        displayProducts(filteredProducts);
      });
    });
  }
  