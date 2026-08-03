function displayChild(newChild) {
    menuBody.replaceChildren(newChild);
  }
  const menuContainer = document.createElement("div");
  const menuHeader = document.createElement("div");
  const menuBody = document.createElement("div");
  const appetizerBtn = document.createElement("button");
  const appetizerDiv = document.createElement("div");
  const appetizerTitle = document.createElement("h2");
  appetizerTitle.textContent = "Appetizer";
  const appetizerBody = document.createElement("div");
  const avocadoBtn = document.createElement("button");
  const avocadoDiv = document.createElement("div");
  const avocadoTitle = document.createElement("h2");
  avocadoTitle.textContent = "Avocado Rolls";
  const avocadoBody = document.createElement("div");
  const cheeseBtn = document.createElement("button");
  const cheeseDiv = document.createElement("div");
  const cheeseTitle = document.createElement("h2");
  cheeseTitle.textContent = "Cheese Rolls";
  const cheeseBody = document.createElement("div");
  const hotBtn = document.createElement("button");
  const hotDiv = document.createElement("div");
  const hotTitle = document.createElement("h2");
  hotTitle.textContent = "Hot Rolls";
  const hotBody = document.createElement("div");
const appetizer1 = {
  name: "Tuna Tartar",
  ingredients: ["Tuna", "Avocado", "Chives", "Sesame Oil", "Soy Sauce"],
  price: "$12.00",
};

const appetizer2 = {
  name: "Salmon Ceviche",
  ingredients: ["Salmon", "Leche de Tigre", "Acevichado Sauce"],
  price: "$9.50",
};

const appetizer3 = {
  name: "Gyozas",
  ingredients: ["Shrimp (5 units)", "Soy Sauce", "Rice Vinegar"],
  price: "$5.00",
};

const avocado1 = {
  name: "Sake Avocado",
  ingredients: ["Salmon", "Cream Cheese", "Chives", "Wrapped in Avocado"],
  price: "$6.60",
};

const avocado2 = {
  name: "Tuna Avocado",
  ingredients: ["Tuna", "Cream Cheese", "Chives", "Wrapped in Avocado"],
  price: "$6.90",
};

const avocado3 = {
  name: "Teri Avocado",
  ingredients: [
    "Teriyaki Chicken",
    "Cream Cheese",
    "Chives",
    "Wrapped in Avocado",
  ],
  price: "$6.60",
};

const cheese1 = {
  name: "Ebi Cheese",
  ingredients: ["Shrimp", "Chives", "Avocado", "Wrapped in Cream Cheese"],
  price: "$6.60",
};

const cheese2 = {
  name: "Tuna Cheese",
  ingredients: [
    "Tuna",
    "Avocado",
    "Wrapped in Cream Cheese",
    "Passion Fruit Sauce",
  ],
  price: "$6.90",
};

const cheese3 = {
  name: "Teri Cheese",
  ingredients: ["Teriyaki Chicken", "Chives", "Wrapped in Cream Cheese"],
  price: "$6.60",
};

const hot1 = {
  name: "Sake Hot",
  ingredients: ["Salmon", "Cream Cheese", "Chives", "Wrapped in Panko"],
  price: "$6.60",
};

const hot2 = {
  name: "Take Hot",
  ingredients: [
    "Mushroom",
    "Cream Cheese",
    "Red Bell Peppers",
    "Almonds",
    "Wrapped in Panko",
  ],
  price: "$6.60",
};

const hot3 = {
  name: "Ebi Hot",
  ingredients: ["Shrimp", "Cream Cheese", "Chives", "Wrapped in Panko"],
  price: "$6.60",
};

function createCard(obj) {
  const totalIngredients = obj.ingredients.length;
  const card = document.createElement("div");
  const cardName = document.createElement("div");
  const cardPrice = document.createElement("div");
  const cardIngredients = document.createElement("div");
  cardName.textContent = obj.name;
  cardPrice.textContent = obj.price;
  for (let i = 0; i < totalIngredients; i++) {
    const ingredient = document.createElement("span");
    ingredient.textContent = obj.ingredients[i];
    cardIngredients.appendChild(ingredient);
  }
  card.append(cardName, cardPrice, cardIngredients);
  return card;
}

appetizerBody.append(
    createCard(appetizer1),
    createCard(appetizer2),
    createCard(appetizer3),
  );
  avocadoBody.append(
    createCard(avocado1),
    createCard(avocado2),
    createCard(avocado3),
  );
  cheeseBody.append(
    createCard(cheese1),
    createCard(cheese2),
    createCard(cheese3),
  )
  hotBody.append(
    createCard(hot1),
    createCard(hot2),
    createCard(hot3),
  )



export default function createMenuPage()  {
  appetizerDiv.append(appetizerTitle, appetizerBody);
  avocadoDiv.append(avocadoTitle, avocadoBody);
  cheeseDiv.append(cheeseTitle, cheeseBody);
  hotDiv.append(hotTitle, hotBody);
  hotTitle.textContent = "Hot Rolls";
  menuHeader.classList.add("menu-header");
  menuBody.classList.add("menu-body");
  appetizerBtn.textContent = "Appetizers";
  avocadoBtn.textContent = "Avocado Rolls";
  cheeseBtn.textContent = "Cheese Rolls";
  hotBtn.textContent = "Hot Rolls";
  menuHeader.append(appetizerBtn, avocadoBtn, cheeseBtn, hotBtn);
  menuContainer.append(menuHeader, menuBody);
  menuBody.replaceChildren(appetizerDiv);
  appetizerBtn.addEventListener("click", () => displayChild(appetizerDiv));
  avocadoBtn.addEventListener("click", () => displayChild(avocadoDiv));
  cheeseBtn.addEventListener("click", () => displayChild(cheeseDiv));
  hotBtn.addEventListener("click", () => displayChild(hotDiv));
  return menuContainer;
};
