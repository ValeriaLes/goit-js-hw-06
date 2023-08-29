const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsItemList = ingredients.map(element => {
  const items = document.createElement("li");
  items.textContent = element;
  items.classList.add("item")
  return items;

})

const ingredientsList = document.querySelector("ul")

ingredientsList.append(...ingredientsItemList)

