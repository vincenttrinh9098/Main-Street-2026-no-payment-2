/**
 * GLOBAL STATE
 */
let menuData = [];
let OPTION_PRESETS = {};
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let currentItem = null;

/**
 * HELPERS
 */
const parsePrice = (str) => {
    if (!str) return 0;
    return parseFloat(str.toString().replace("$", "")) || 0;
};

const formatPrice = (num) => `$${num.toFixed(2)}`;

const fixPath = (p) => {
    if (!p) return 'images/placeholder.png';
    return p.replace(/^\.\//, "").replace(/^\//, "");
};

/**
 * INITIALIZATION
 */
document.addEventListener("DOMContentLoaded", () => {
  ensureCartIconExists(); // <--- Add this here
    // 1. Fetch Menu Data
    fetch('./content/menu.json')
        .then(res => res.json())
        .then(data => {
            menuData = data.menuData;
            OPTION_PRESETS = data.optionPresets;
            renderMenu();
            setupSubnav();
            updateCartCount();
        })
        .catch(err => console.error("Error loading JSON:", err));

    // 2. Setup Cart Modal Toggles
    const cartIcon = document.getElementById("cart-icon");
    const cartModal = document.getElementById("cartModal");
    const closeCart = document.getElementById("close-cart");

    if (cartIcon) {
        cartIcon.onclick = () => {
            renderCart();
            if (cartModal) cartModal.style.display = "block";
        };
    }

    if (closeCart) {
        closeCart.onclick = () => {
            cartModal.style.display = "none";
        };
    }

    // 3. Setup Add to Cart Button Logic
    setupAddToCartLogic();
});

/**
 * RENDER MENU GRID
 */
function renderMenu() {
    const container = document.getElementById("menu-container");
    if (!container) return;

    container.innerHTML = menuData.map(cat => `
        <section class="menu-category" id="${cat.category.toLowerCase().replace(/\s+/g, "-")}">
            <h2 class="category-title">${cat.category}</h2>
            <div class="menu-grid">
                ${cat.items.map((item, idx) => `
                    <div class="menu-item" onclick="openModal('${cat.category}', ${idx})">
                        <div class="item-text">
                            <h4 class="item-name">${item.name}</h4>
                            <p class="item-desc">${item.desc || ""}</p>
                            <span class="item-price">${item.price}</span>
                        </div>
                        <div class="item-image">
                            <img src="${fixPath(item.image)}" alt="${item.name}" onerror="this.src='images/bagel/classic_bagel.jpg'">
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `).join('');
}

/**
 * ITEM MODAL LOGIC
 */
function openModal(categoryName, itemIndex) {
    const category = menuData.find(c => c.category === categoryName);
    currentItem = category.items[itemIndex];
    
    const modal = document.getElementById("menuModal");
    const addToCartBtn = document.getElementById("add-to-cart-btn");

    // Populate Modal
    document.getElementById("modal-item-name").textContent = currentItem.name;
    document.getElementById("modal-item-price").textContent = currentItem.price;
    document.getElementById("modal-item-image").src = fixPath(currentItem.image);
    
    // Reset dataset for the button
    addToCartBtn.dataset.category = categoryName;
    addToCartBtn.dataset.index = itemIndex;

    // Render Options
    renderOptions(currentItem.optionsPreset);

    modal.style.display = "block";

    // Standard Close Logic
    const closeBtn = modal.querySelector(".close");
    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };
}

function renderOptions(presetName) {
    const container = document.getElementById("modal-options");
    const groups = OPTION_PRESETS[presetName] || [];
    container.innerHTML = "";

    groups.forEach((group, gIdx) => {
        const isRequired = group.type === "radio";
        const groupDiv = document.createElement("div");
        groupDiv.className = "modal-option-group";
        
        groupDiv.innerHTML = `
            <hr style="margin: 15px 0; border: 1px solid #eee;">
            <h4 class="modal-options-title" style="margin-bottom: 10px;">
                ${group.title} ${isRequired ? '<span style="color:red">*</span>' : ''}
            </h4>
            <div class="modal-options-list" data-required="${isRequired}">
                ${group.choices.map(choice => `
                    <label style="display: flex; justify-content: space-between; align-items: center; margin: 10px 0; cursor: pointer; width: 100%;">
                        <div style="display: flex; align-items: center;">
                            <input type="${group.type}" name="group-${gIdx}" 
                                   value="${choice.label}" 
                                   data-price="${choice.price || 0}"
                                   style="margin-right: 10px;">
                            <span>${choice.label}</span>
                        </div>
                        ${choice.price > 0 ? `<span style="color: #666; font-weight: 500;">+${formatPrice(choice.price)}</span>` : ""}
                    </label>
                `).join("")}
            </div>
        `;
        container.appendChild(groupDiv);
    });
}

/**
 * ADD TO CART LOGIC (WITH VALIDATION)
 */
function setupAddToCartLogic() {
    const btn = document.getElementById("add-to-cart-btn");
    if (!btn) return;

    btn.onclick = () => {
        // 1. Validation Logic
        const requiredGroups = document.querySelectorAll(".modal-options-list[data-required='true']");
        for (const group of requiredGroups) {
            if (group.querySelectorAll("input:checked").length === 0) {
                alert("Please select the required options marked with *");
                return; // Stop execution
            }
        }

        // 2. Calculations
        const checkedInputs = Array.from(document.querySelectorAll("#modal-options input:checked"));
        const extraPrice = checkedInputs.reduce((sum, input) => sum + parseFloat(input.dataset.price || 0), 0);
        const basePrice = parsePrice(currentItem.price);
        
        const selectedOptions = checkedInputs.map(i => ({
            label: i.value,
            price: parseFloat(i.dataset.price || 0)
        }));

        // 3. Build Cart Item
        const cartItem = {
            id: Date.now(),
            name: currentItem.name,
            basePrice: basePrice,
            totalPrice: basePrice + extraPrice,
            options: selectedOptions,
            image: currentItem.image,
            quantity: 1
        };

        // 4. Save
        cart.push(cartItem);
        saveCart();
        document.getElementById("menuModal").style.display = "none";
    };
}

/**
 * CART UI UPDATES
 */
function renderCart() {
    const container = document.getElementById("cart-items");
    const totalEl = document.getElementById("cart-total");
    if (!container) return;

    container.innerHTML = "";
    let grandTotal = 0;

    if (cart.length === 0) {
        container.innerHTML = "<p style='text-align:center; padding:20px;'>Your cart is empty.</p>";
        totalEl.textContent = "Total: $0.00";
        return;
    }

    cart.forEach((item, index) => {
        const lineTotal = (item.totalPrice || item.basePrice) * item.quantity;
        grandTotal += lineTotal;

        container.innerHTML += `
            <div class="cart-item" style="display:flex; align-items:center; gap:12px; border-bottom:1px solid #eee; padding:10px 0;">
                <img src="${fixPath(item.image)}" style="width:50px; height:50px; object-fit:cover; border-radius:5px;">
                <div style="flex-grow:1;">
                    <div style="display:flex; justify-content:space-between; font-weight:bold;">
                        <span>${item.name}</span>
                        <span>${formatPrice(lineTotal)}</span>
                    </div>
                    <small style="color:#666;">${item.options.map(o => o.label).join(", ") || "No extras"}</small>
                    <div style="margin-top:5px; display:flex; align-items:center; gap:10px;">
                        <button onclick="changeQty(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQty(${index}, 1)">+</button>
                        <button onclick="removeItem(${index})" style="color:red; margin-left:auto; background:none; border:none; cursor:pointer;">Remove</button>
                    </div>
                </div>
            </div>
        `;
    });
    totalEl.innerHTML = `<h3 style="text-align:right; margin-top:15px;">Total: ${formatPrice(grandTotal)}</h3>`;
}

window.changeQty = (idx, delta) => {
    cart[idx].quantity = Math.max(1, cart[idx].quantity + delta);
    saveCart();
};

window.removeItem = (idx) => {
    cart.splice(idx, 1);
    saveCart();
};

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

function updateCartCount() {
    const countEl = document.getElementById("cart-count");
    if (countEl) countEl.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function setupSubnav() {
    const subnav = document.getElementById("menu-subnav");
    if (subnav) {
        subnav.innerHTML = menuData.map(cat => `
            <a href="#${cat.category.toLowerCase().replace(/\s+/g, "-")}" class="menu-subnav-link">${cat.category}</a>
        `).join('');
    }
}

function ensureCartIconExists() {
    // Look for your nav bar
    const nav = document.querySelector('.nav-container') || document.querySelector('nav');
    
    // If the icon isn't there, create it
    if (nav && !document.getElementById("cart-icon")) {
        const cartBtn = document.createElement("div");
        cartBtn.id = "cart-icon";
        cartBtn.innerHTML = `🛒 <span id="cart-count">0</span>`;
        
        // Add some basic styling so it's visible
        cartBtn.style.cssText = "cursor:pointer; position:relative; font-size:1.5rem; margin-left:20px;";
        nav.appendChild(cartBtn);
        
        // Re-attach the click event
        cartBtn.onclick = () => {
            renderCart();
            document.getElementById("cartModal").style.display = "block";
        };
    }
}