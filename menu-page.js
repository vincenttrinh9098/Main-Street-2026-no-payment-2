const OPTION_PRESETS = {
  sandwich: [
    {
      title: "Bread Choice",
      type: "radio",
      choices: ["Plain roll", "Score garlic parmesan roll", "Jalapeno Score garlic parmesan roll", "Cheddar roll", "Croissant", "bagel"]
    }
  ],

  milkTeaToppings: [
    {
      title: "Add-ons",
      type: "checkbox",
      choices: ["Tapioca Pearl", "Lychee Jelly", "Rainbow Jelly", "Coffee Jelly", "Mango Jelly", "Crystal white pearls", "Mango popping"]
    }
  ],

  classicBagel: [
    {
     title: "Bagel Choice",
     type: "radio",
     choices: ["Plain bagel","Everything bagel","Cinnamon Crunch bagel","Sesame bagel","Strawberry Bagel","Cinnamon Raisin bagel","Salt bagel"," Sourdough bagel","Onion bagel"," Garlic bagel"," Whool Wheat Raisin bagel","Poppy bagel","Bluberry bagel","Cranberry bagel"]
    },
    { 
      title: "With Cream Cheese",
      type: "radio",
      choices: ["Peanut butter", "Green onions cream cheese", "Garlic herb cream cheese", "Sundries tomatoes cream cheese", "Veggie cream cheese", "Blueberry cream cheese","Spinach and garlic cream cheese"]
    }
  ],

   gourmetBagel: [
    {
     title: "Bagel Choice",
     type: "radio",
     choices: ["Blue Berry Crunch bagel","Score Garlic bagel","Asiago bagel","Chocolate Chip bagel","Spinach Parmesan bagel","Jalapeno Cheddar bagel"," Cheddar Cheese bagel"]
    },
    { 
      title: "With Cream Cheese",
      type: "radio",
      choices: ["Peanut butter", "Green onions cream cheese", "Garlic herb cream cheese", "Sundries tomatoes cream cheese", "Veggie cream cheese", "Blueberry cream cheese","Spinach and garlic cream cheese"]
    }
  ],

   specialBagel: [
    {
     title: "Bagel Choice",
     type: "radio",
     choices: ["Spinach Mushroom Provolone bagel", "Score Garlic Jalapeno Bagel", "Bacon Jalapeno bagel", "Cheddar Bacon bagel"]
    },
    { 
      title: "With Cream Cheese",
      type: "radio",
      choices: ["Peanut butter", "Green onions cream cheese", "Garlic herb cream cheese", "Sundries tomatoes cream cheese", "Veggie cream cheese", "Blueberry cream cheese","Spinach and garlic cream cheese"]
    }
  ],
  
     breakfastBagel: [
    {
     title: "Addtional Extras",
     type: "checkbox",
     choices: ["Add extra meat", "Add sprout", "Add tomatoes", "Add onion", "Add cucumbers","Add butter"]
    }
  ] 


};

const menuData = [
  { category: "Most Popular", items: [
      { name: "Breakfast Egg Ham Cheese Bagel", desc: "Bagel with ham, perfect for breakfast", price: "$8.25", image: "/images/bagel/breakfast_ham.jpg", optionsPreset: "breakfastBagel" },
      { name: "Breakfast Egg Sausage Cheese Bagel", desc: "Bagel with sausage, savory and delicious", price: "$8.25", image: "images/bagel/breakfast_sausage.jpg",optionsPreset: "breakfastBagel" },
      { name: "Breakfast Egg Bacon Cheese Bagel", desc: "Bagel with crispy bacon", price: "$8.25", image: "images/bagel/breakfast_bacon.jpg",optionsPreset: "breakfastBagel"},
      { name: "Breakfast Egg Ham Cheese Croissant", desc: "Flaky croissant with ham", price: "$9.75", image: "images/crossaint_ham.jpg", optionsPreset: "breakfastBagel" },
      { name: "Nova Lox Bagel", desc: "Bagel with smoked salmon", price: "$10.99", image: "images/nova_lox.jpg", optionsPreset: "breakfastBagel"},
      { name: "Vietnamese Coffee", desc: "Rich and sweet iced coffee", price: "$6.50", image: "images/vietnamese_coffee.jpg", optionsPreset: "milkTeaToppings"}
    ]
  },
  { category: "Bagels", items: [
      { name: "Classic Bagel", desc: "Freshly baked classic bagels", price: "$1.95", image: "images/bagel/classic_bagel.jpg", optionsPreset: "classicBagel" },
      { name: "Gourmet Bagel", desc: "Topped with extra toppings for more flavor", price: "$2.05", image: "images/bagel/gourmet_bagel.jpg", optionsPreset: "gourmetBagel" },
      { name: "Special Bagel", desc: "Unique flavors baked fresh daily", price: "$2.25", image: "images/bagel/special_bagel.jpg",optionsPreset: "specialBagel" }
    ]
  }, 


  { category: "Sandwiches", items: [
      { name: "Main Street Club Sandwich", desc: "Classic club sandwich with turkey and bacon", price: "$9.75", image: "images/sandwich/main_street_club_sandwich.jpg",optionsPreset: "sandwich" },
      { name: "Main Street Special", desc: "Signature sandwich with fresh ingredients", price: "$9.25", image: "images/sandwich/main_street_special_sandwich.jpg", optionsPreset: "sandwich"},
      { name: "Pastrami Sandwich", desc: "Savory pastrami with mustard on fresh bread", price: "$8.75", image: "images/sandwich/pastrami_sandwich.jpg",optionsPreset: "sandwich" },
      { name: "Roast Beef Sandwich", desc: "Tender roast beef with cheese", price: "$8.75", image: "images/sandwich/roast_beef_sandwich.jpg",optionsPreset: "sandwich" },
      { name: "Tuna Salad Sandwich", desc: "Fresh tuna salad on a soft roll", price: "$8.75", image: "images/sandwich/tuna_salad_sandwich.jpg",optionsPreset: "sandwich" },
      { name: "Turkey Bacon Avocado Sandwich", desc: "Turkey, bacon, and avocado on fresh bread", price: "$9.75", image: "images/sandwich/turkey_bacon_avacado_sandwich.jpg",optionsPreset: "sandwich"},
      { name: "Avacado Veggie Sandwich", desc: "Turkey, bacon, and avocado on fresh bread", price: "$8.25", image: "images/sandwich/avacado_veggies.jpg",optionsPreset: "sandwich"},
      { name: "Grilled Chicken Club", desc: "Turkey, bacon, and avocado on fresh bread", price: "$8.25", image: "images/sandwich/grilled_chicken_club.jpg",optionsPreset: "sandwich"},
      { name: "Turkey Sandwich", desc: "Turkey and vegetables fresh bread", price: "$8.75", image: "images/sandwich/turkey_sandwich.jpg",optionsPreset: "sandwich"},
      { name: "Turkey Sandwich", desc: "Turkey and vegetables fresh bread", price: "$8.75", image: "images/sandwich/ham_sandwich.jpg",optionsPreset: "sandwich"},
      { name: "Turkey Sandwich", desc: "Turkey and vegetables fresh bread", price: "$9.75", image: "images/sandwich/turkey_cranberry_sandwich.jpg",optionsPreset: "sandwich"}
    ]
  },

  { category: "Specialty", items: [
    { name: "Pepperoni Pizza Bagel", desc: "Bagel topped with pepperoni, marinara, and cheese", price: "$4.50", image: "images/specialty/pep_pizza_bagel.jpg" },
    { name: "Plain Bagel Dog", desc: "Classic hot dog wrapped in a fresh plain bagel", price: "$4.75", image: "images/specialty/plain_bagel_dog.jpg" },
    { name: "Jalapeño Bagel Dog", desc: "Hot dog wrapped in a jalapeño-flavored bagel", price: "$5.25", image: "images/specialty/jalapeno_bagel_dog.jpg" },
    { name: "Parmesan Bagel Dog", desc: "Hot dog wrapped in a parmesan cheese bagel", price: "$5.25", image: "images/specialty/parmesan_bagel_dog.jpg" },
    { name: "Butter Croissant", desc: "Flaky, buttery croissant baked fresh", price: "$3.25", image: "images/specialty/butter_croissant.jpg" },
    { name: "Strawberry Scone", desc: "Sweet scone made with real strawberries", price: "$4.00", image: "images/specialty/strawberry_scone.jpg" },
    { name: "Blueberry Scone", desc: "Soft baked scone with fresh blueberries", price: "$4.00", image: "images/specialty/blueberry_scone.jpg" },
    { name: "Chocolate Chip Scone", desc: "Classic scone loaded with chocolate chips", price: "$4.00", image: "images/specialty/chocolate_chip_scone.jpg" },
    { name: "Cinnamon Roll", desc: "Soft cinnamon roll with sweet icing", price: "$5.25", image: "images/specialty/cinnamon_roll.jpg" }
    ]
  },

  { category: "Hot Drinks", items: [
      { name: "Vietnamese Coffee", desc: "Rich and sweet iced coffee", price: "$1.75", image: "images/vietnamese_coffee.jpg" },
      { name: "Sesame Milk Drink", desc: "Creamy sesame-flavored milk beverage", price: "$1.75", image: "images/sesame.jpg" }
    ]
  },
  { category: "Cold Drinks", items: [
      { name: "Vietnamese Coffee", desc: "Rich and sweet iced coffee", price: "$1.75", image: "images/vietnamese_coffee.jpg" },
      { name: "Sesame Milk Drink", desc: "Creamy sesame-flavored milk beverage", price: "$1.75", image: "images/sesame.jpg" }
    ]
  },

];

// ===========================
// CART SETUP
// ===========================
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartCountEl = document.createElement("span");
cartCountEl.id = "cart-count";
cartCountEl.style.marginLeft = "5px";

// Add cart icon to nav
const nav = document.querySelector(".nav");
const cartIcon = document.createElement("div");
cartIcon.id = "cart-icon";
cartIcon.innerHTML = "🛒";
cartIcon.appendChild(cartCountEl);
cartIcon.style.cursor = "pointer";
cartIcon.style.display = "inline-block";
cartIcon.style.marginLeft = "15px";
nav.appendChild(cartIcon);

function updateCartCount() {
  cartCountEl.textContent = cart.reduce((sum,item)=>sum+(item.quantity||1),0);
}
updateCartCount();

// ===========================
// RENDER MENU
// ===========================
function renderMenu() {
  const container = document.getElementById("menu-container");
  container.innerHTML = ""; // Clear first

  menuData.forEach(category => {
    const section = document.createElement("section");
    section.className = "menu-category";
    const sectionId = category.category.toLowerCase().replace(/\s+/g, "-");
    section.id = sectionId;

    section.innerHTML = `
      <h2 class="category-title">${category.category}</h2>
      <div class="menu-grid">
        ${category.items.map((item, index) => `
          <div class="menu-item" data-category="${category.category}" data-index="${index}">
            <div class="item-text">
              <h4 class="item-name">${item.name}</h4>
              <p class="item-desc">${item.desc}</p>
              <span class="item-price">${item.price}</span>
            </div>
            <div class="item-image">
              <img src="${item.image}" alt="${item.name}">
            </div>
          </div>
        `).join("")}
      </div>
    `;

    container.appendChild(section);
  });
}

// ===========================
// INIT DOM CONTENT
// ===========================
document.addEventListener("DOMContentLoaded", () => {
  renderMenu();

  // Subnav
  const subnav = document.getElementById("menu-subnav");
  const categories = [...new Set(menuData.map(cat => cat.category))];
  categories.forEach(category => {
    const link = document.createElement("a");
    link.href = `#${category.replace(/\s+/g, '-').toLowerCase()}`;
    link.className = "menu-subnav-link";
    link.textContent = category;
    subnav.appendChild(link);
  });

  // Modals
  const modal = document.getElementById("menuModal");
  const closeBtn = document.querySelector(".modal .close");
  const modalName = document.getElementById("modal-item-name");
  const modalDesc = document.getElementById("modal-item-desc");
  const modalPrice = document.getElementById("modal-item-price");
  const modalOptions = document.getElementById("modal-options");
  const addToCartBtn = document.getElementById("add-to-cart-btn");
  const modalImage = document.getElementById("modal-item-image");

  const cartModal = document.getElementById("cartModal");
  const closeCartBtn = document.getElementById("close-cart");
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalEl = document.getElementById("cart-total");

  // ===========================
  // RENDER CART
  // ===========================
  function renderCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
      const priceNum = parseFloat(item.price.replace("$", ""));
      total += priceNum * (item.quantity || 1);

      const itemDiv = document.createElement("div");
      itemDiv.className = "cart-item";
      itemDiv.style.borderBottom = "1px solid #ddd";
      itemDiv.style.padding = "10px 0";

      itemDiv.innerHTML = `
        <div class="cart-item-top" style="display:flex; align-items:center; gap:10px;">
          <img src="${item.image}" alt="${item.name}" style="width:60px; height:60px; object-fit:cover; border-radius:5px;">
          <div style="flex:1; display:flex; justify-content:space-between; align-items:center;">
            <strong>${item.name}</strong>
            <span class="cart-item-price">${item.price}</span>
          </div>
        </div>
        <div class="cart-item-options" style="margin:5px 0 10px 70px;">
          ${item.options.length ? item.options.join(", ") : "None"}
        </div>
        <div class="cart-item-controls" style="display:flex; align-items:center; justify-content:space-between; margin-left:70px;">
          <div class="cart-item-quantity" style="display:flex; align-items:center; gap:5px;">
            <button class="qty-btn" data-action="decrease" data-index="${index}">-</button>
            <span class="qty-value">${item.quantity || 1}</span>
            <button class="qty-btn" data-action="increase" data-index="${index}">+</button>
          </div>
          <button class="remove-item" data-index="${index}" style="background:#ff4d4d; color:white; border:none; padding:5px 10px; border-radius:5px; cursor:pointer;">Remove</button>
        </div>
      `;

      cartItemsContainer.appendChild(itemDiv);
    });

    cartTotalEl.textContent = `Total: $${total.toFixed(2)}`;
  }



  // ===========================
  // Event Listeners
  // ===========================
// ===========================
// Menu item click
// ===========================
document.getElementById("menu-container").addEventListener("click", e => {
  const item = e.target.closest(".menu-item");
  if (!item) return;

  const category = item.dataset.category;
  const index = item.dataset.index;
  const menuItem = menuData.find(c => c.category === category).items[index];

  modalName.textContent = menuItem.name;
  modalDesc.textContent = menuItem.desc;
  modalPrice.textContent = menuItem.price;
  modalImage.src = menuItem.image;
  modalImage.alt = menuItem.name;

  // ===========================
  // OPTIONS (NEW SYSTEM)
  // ===========================
  const optionGroups = OPTION_PRESETS[menuItem.optionsPreset] || [];

  // Clear previous options
  modalOptions.innerHTML = "";

  if (optionGroups.length === 0) {
    modalOptions.innerHTML = "<p>No customizations available</p>";
  } else {
    optionGroups.forEach((group, groupIndex) => {
      const groupDiv = document.createElement("div");
      groupDiv.className = "modal-option-group";

      groupDiv.innerHTML = `
        <hr class="modal-divider">
        <h4 class="modal-options-title">${group.title}</h4>
        <div class="modal-options-list">
          ${group.choices.map(choice => `
            <label>
              <input
                type="${group.type}"
                name="option-group-${groupIndex}"
                value="${choice}"
              >
              ${choice}
            </label>
          `).join("")}
        </div>
      `;

      modalOptions.appendChild(groupDiv);
    });
  }

  modal.style.display = "block";

  addToCartBtn.dataset.category = category;
  addToCartBtn.dataset.index = index;
});


  // Add to cart
  addToCartBtn.addEventListener("click", ()=>{
    const category = addToCartBtn.dataset.category;
    const index = addToCartBtn.dataset.index;
    const menuItem = menuData.find(c=>c.category===category).items[index];
    const selectedOptions = Array.from(modalOptions.querySelectorAll("input:checked")).map(o=>o.value);

    cart.push({
      name: menuItem.name,
      price: menuItem.price,
      options: selectedOptions,
      image: menuItem.image,
      quantity: 1
    });

    localStorage.setItem("cart",JSON.stringify(cart));
    updateCartCount();
    modal.style.display = "none";
  });

  // Quantity change
  cartItemsContainer.addEventListener("input", e=>{
    if(e.target.classList.contains("cart-quantity-input")){
      const index = e.target.dataset.index;
      const qty = parseInt(e.target.value);
      if(qty<1) { e.target.value = 1; return; }
      cart[index].quantity = qty;
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
      updateCartCount();
    }
  });

  cartItemsContainer.addEventListener("click", e => {
  if(e.target.classList.contains("qty-btn")){
    const index = e.target.dataset.index;
    if(e.target.dataset.action === "increase"){
      cart[index].quantity = (cart[index].quantity || 1) + 1;
    } else if(e.target.dataset.action === "decrease"){
      cart[index].quantity = Math.max(1, (cart[index].quantity || 1) - 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    renderCart();
  }
});


  // Remove item
  cartItemsContainer.addEventListener("click", e=>{
    if(e.target.classList.contains("remove-item")){
      const index = e.target.dataset.index;
      cart.splice(index,1);
      localStorage.setItem("cart",JSON.stringify(cart));
      updateCartCount();
      renderCart();
    }
  });

  // Cart modal
  cartIcon.addEventListener("click", ()=>{
    renderCart();
    cartModal.style.display = "block";
  });

  // Close modals
  closeBtn.onclick = ()=>modal.style.display="none";
  closeCartBtn.onclick = ()=>cartModal.style.display="none";
  window.onclick = e=>{
    if(e.target===modal) modal.style.display="none";
    if(e.target===cartModal) cartModal.style.display="none";
  };
});
