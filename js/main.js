/**
 * LUMEN Optical - Main Interactive Logic
 * Cart Management, Product Rendering, Filter System, Micro-Interactions
 */

// Cart Manager with LocalStorage Persistence
const CartManager = {
  storageKey: "lumen_optical_cart",

  getCart() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn("Storage not available, using empty cart", e);
      return [];
    }
  },

  saveCart(cart) {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(cart));
      this.updateHeaderBadge();
      this.renderDrawer();
    } catch (e) {
      console.error("Failed to save cart", e);
    }
  },

  addItem(item) {
    const cart = this.getCart();
    const existingIndex = cart.findIndex(
      (c) => c.id === item.id && c.selectedColor === item.selectedColor && c.selectedLens === item.selectedLens
    );

    if (existingIndex > -1) {
      cart[existingIndex].qty += item.qty || 1;
    } else {
      cart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        selectedColor: item.selectedColor || "Standard",
        selectedLens: item.selectedLens || "Default",
        image: item.image,
        qty: item.qty || 1
      });
    }

    this.saveCart(cart);
    this.openDrawer();
    showToast(`Added to Bag`, `${item.name} (${item.selectedColor}) is now in your bespoke cart.`);
  },

  removeItem(index) {
    const cart = this.getCart();
    const removed = cart.splice(index, 1);
    this.saveCart(cart);
    if (removed.length > 0) {
      showToast(`Item Removed`, `${removed[0].name} removed from your bag.`);
    }
  },

  updateQty(index, delta) {
    const cart = this.getCart();
    if (cart[index]) {
      cart[index].qty += delta;
      if (cart[index].qty <= 0) {
        cart.splice(index, 1);
      }
      this.saveCart(cart);
    }
  },

  getTotalCount() {
    const cart = this.getCart();
    return cart.reduce((sum, item) => sum + (item.qty || 1), 0);
  },

  getSubtotal() {
    const cart = this.getCart();
    return cart.reduce((sum, item) => sum + (item.price * (item.qty || 1)), 0);
  },

  updateHeaderBadge() {
    const count = this.getTotalCount();
    const badges = document.querySelectorAll(".cart-count-badge");
    badges.forEach((b) => {
      b.textContent = count;
      b.style.display = count > 0 ? "flex" : "none";
    });
  },

  openDrawer() {
    const overlay = document.getElementById("cartDrawerOverlay");
    if (overlay) {
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  },

  closeDrawer() {
    const overlay = document.getElementById("cartDrawerOverlay");
    if (overlay) {
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    }
  },

  renderDrawer() {
    const bodyEl = document.getElementById("cartDrawerItems");
    const subtotalEl = document.getElementById("cartDrawerSubtotal");
    const totalEl = document.getElementById("cartDrawerTotal");
    const freeShippingEl = document.getElementById("freeShippingMsg");

    if (!bodyEl) return;

    const cart = this.getCart();
    const subtotal = this.getSubtotal();

    if (cart.length === 0) {
      bodyEl.innerHTML = `
        <div class="cart-empty-state">
          <svg class="cart-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <h4 style="margin-bottom:0.5rem;font-size:1.15rem;">Your Cart is Empty</h4>
          <p style="font-size:0.85rem;color:var(--color-text-dim);margin-bottom:1.5rem;">Explore our sustainable Japanese titanium and organic bio-acetate frames.</p>
          <a href="products.html" class="btn btn-secondary btn-sm" onclick="CartManager.closeDrawer()">Explore Catalog</a>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = "₹0";
      if (totalEl) totalEl.textContent = "₹0";
      return;
    }

    bodyEl.innerHTML = cart
      .map(
        (item, idx) => `
        <div class="cart-item">
          <div class="cart-item-img">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
          </div>
          <div class="cart-item-details">
            <h4>${item.name}</h4>
            <div class="cart-item-meta">${item.selectedColor} &bull; ${item.selectedLens}</div>
            <div class="cart-item-qty">
              <button class="cart-qty-btn" onclick="CartManager.updateQty(${idx}, -1)" aria-label="Decrease quantity">&minus;</button>
              <span style="font-family:var(--font-mono);font-size:0.85rem;padding:0 0.35rem;">${item.qty}</span>
              <button class="cart-qty-btn" onclick="CartManager.updateQty(${idx}, 1)" aria-label="Increase quantity">&plus;</button>
            </div>
            <button class="cart-item-remove" onclick="CartManager.removeItem(${idx})">Remove</button>
          </div>
          <div class="cart-item-price">
            ${window.formatINR ? window.formatINR(item.price * item.qty) : "₹" + (item.price * item.qty)}
          </div>
        </div>
      `
      )
      .join("");

    if (subtotalEl) {
      subtotalEl.textContent = window.formatINR ? window.formatINR(subtotal) : "₹" + subtotal;
    }
    if (totalEl) {
      totalEl.textContent = window.formatINR ? window.formatINR(subtotal) : "₹" + subtotal;
    }
    if (freeShippingEl) {
      freeShippingEl.innerHTML = `<strong>Complimentary Carbon-Neutral Courier</strong> included on all orders across India &amp; Worldwide.`;
    }
  }
};

// Toast Notification System
function showToast(title, message) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="9 12 11 14 15 10"></polyline>
    </svg>
    <div>
      <div class="toast-title">${title}</div>
      <div class="toast-desc">${message}</div>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4200);
}

// Mobile Menu Toggle
function initMobileMenu() {
  const toggle = document.querySelector(".mobile-menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }
}

// Initialise Global Cart Overlay Triggers
function initCartDrawer() {
  const openButtons = document.querySelectorAll("[data-action='open-cart']");
  const closeButtons = document.querySelectorAll("[data-action='close-cart']");
  const overlay = document.getElementById("cartDrawerOverlay");

  openButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      CartManager.openDrawer();
    });
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      CartManager.closeDrawer();
    });
  });

  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        CartManager.closeDrawer();
      }
    });
  }

  // Checkout button simulation
  const checkoutBtn = document.getElementById("checkoutBtn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      const cart = CartManager.getCart();
      if (cart.length === 0) {
        showToast("Cart Empty", "Please add a frame before proceeding to checkout.");
        return;
      }
      CartManager.closeDrawer();
      showToast("Order Initialized", "Redirecting to encrypted SSL checkout portal with carbon offset...");
    });
  }

  // Pre-populate cart badge and drawer
  CartManager.updateHeaderBadge();
  CartManager.renderDrawer();
}

// Products Catalog Rendering & Filtering (products.html)
function initProductsCatalog() {
  const grid = document.getElementById("productsGrid");
  if (!grid || typeof LUMEN_PRODUCTS === "undefined") return;

  const filterTabs = document.querySelectorAll(".filter-tab-btn");
  const sortSelect = document.getElementById("sortSelect");
  const resultCount = document.getElementById("resultCount");

  let currentCategory = "all";
  let currentSort = "featured";

  function renderList() {
    let list = [...LUMEN_PRODUCTS];

    // Filter by Category
    if (currentCategory !== "all") {
      list = list.filter((p) => p.category === currentCategory);
    }

    // Sort
    if (currentSort === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (currentSort === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    } else if (currentSort === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    }

    if (resultCount) {
      resultCount.textContent = `Showing ${list.length} Sustainable Eyewear Models`;
    }

    grid.innerHTML = list
      .map(
        (product) => `
        <article class="product-card" data-category="${product.category}">
          <div class="product-card-media">
            <span class="product-badge">${product.badge}</span>
            <img class="img-primary" src="${product.primaryImage}" alt="${product.name} luxury sustainable eyewear front view" loading="lazy">
            <img class="img-secondary" src="${product.secondaryImage}" alt="${product.name} side angle view showing recycled titanium craft" loading="lazy">
          </div>
          <div class="product-card-body">
            <div class="product-card-meta">
              <span class="product-card-category">${product.categoryLabel}</span>
              <span class="product-card-rating">${product.rating} ★ (${product.reviewsCount})</span>
            </div>
            <h3 class="product-card-title">
              <a href="product-detail.html?id=${product.id}">${product.name}</a>
            </h3>
            <div class="product-card-material">${product.materialLabel}</div>
            
            <div class="product-card-swatches">
              ${product.colors
                .map(
                  (c, idx) => `
                <span class="swatch-dot ${idx === 0 ? "active" : ""}" 
                      style="background-color: ${c.code}" 
                      title="${c.name}"></span>
              `
                )
                .join("")}
            </div>

            <div class="product-card-footer">
              <div class="product-card-price">
                <span class="price-current">${window.formatINR(product.price)}</span>
                <span class="price-original">${window.formatINR(product.originalPrice)}</span>
              </div>
              <a href="product-detail.html?id=${product.id}" class="btn btn-secondary btn-sm quick-view-btn">
                View Specs
              </a>
            </div>
          </div>
        </article>
      `
      )
      .join("");
  }

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      currentCategory = tab.dataset.filter || "all";
      renderList();
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderList();
    });
  }

  // Initial render
  renderList();
}

// Product Detail Showcase Logic (product-detail.html)
function initProductDetail() {
  if (typeof LUMEN_PRODUCTS === "undefined") return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id") || "aethelgard-titanium";

  const product = LUMEN_PRODUCTS.find((p) => p.id === productId) || LUMEN_PRODUCTS[0];

  // Populate Title, Taglines, Breadcrumb
  const titleEl = document.getElementById("detailTitle");
  const taglineEl = document.getElementById("detailTagline");
  const priceCurrentEl = document.getElementById("detailPriceCurrent");
  const priceOriginalEl = document.getElementById("detailPriceOriginal");
  const ratingEl = document.getElementById("detailRatingText");
  const badgeEl = document.getElementById("detailBadge");
  const descEl = document.getElementById("detailDescription");
  const breadcrumbProductEl = document.getElementById("breadcrumbProductName");
  const breadcrumbCategoryEl = document.getElementById("breadcrumbCategoryName");

  if (titleEl) titleEl.textContent = product.name;
  if (taglineEl) taglineEl.textContent = product.tagline;
  if (priceCurrentEl) priceCurrentEl.textContent = window.formatINR(product.price);
  if (priceOriginalEl) priceOriginalEl.textContent = window.formatINR(product.originalPrice);
  if (ratingEl) ratingEl.textContent = `${product.rating} ★ (${product.reviewsCount} verified reviews)`;
  if (badgeEl) badgeEl.textContent = product.badge;
  if (descEl) descEl.textContent = product.fullDescription;
  if (breadcrumbProductEl) breadcrumbProductEl.textContent = product.name;
  if (breadcrumbCategoryEl) {
    breadcrumbCategoryEl.textContent = product.categoryLabel;
    breadcrumbCategoryEl.href = `products.html?cat=${product.category}`;
  }

  // Populate Gallery
  const mainImageEl = document.getElementById("galleryMainImage");
  const thumbsContainer = document.getElementById("galleryThumbsContainer");

  if (mainImageEl && product.detailImages && product.detailImages.length > 0) {
    mainImageEl.src = product.detailImages[0].url;
    mainImageEl.alt = product.detailImages[0].alt;
  }

  if (thumbsContainer && product.detailImages) {
    thumbsContainer.innerHTML = product.detailImages
      .map(
        (img, idx) => `
        <div class="gallery-thumb ${idx === 0 ? "active" : ""}" data-index="${idx}">
          <img src="${img.url}" alt="${img.alt}" loading="lazy">
        </div>
      `
      )
      .join("");

    const thumbs = thumbsContainer.querySelectorAll(".gallery-thumb");
    thumbs.forEach((thumb) => {
      thumb.addEventListener("click", () => {
        thumbs.forEach((t) => t.classList.remove("active"));
        thumb.classList.add("active");
        const idx = parseInt(thumb.dataset.index, 10);
        if (mainImageEl && product.detailImages[idx]) {
          mainImageEl.src = product.detailImages[idx].url;
          mainImageEl.alt = product.detailImages[idx].alt;
        }
      });
    });
  }

  // Populate Color Swatches
  let selectedColor = product.colors[0]?.name || "Standard";
  const swatchesContainer = document.getElementById("detailSwatchesContainer");
  const selectedColorLabel = document.getElementById("selectedColorName");

  if (swatchesContainer) {
    swatchesContainer.innerHTML = product.colors
      .map(
        (c, idx) => `
        <button type="button" class="detail-swatch-btn ${idx === 0 ? "active" : ""}" data-color="${c.name}" data-img-idx="${c.imageIdx}">
          <span class="color-chip" style="background-color: ${c.code}"></span>
          <span>${c.name}</span>
        </button>
      `
      )
      .join("");

    if (selectedColorLabel) selectedColorLabel.textContent = selectedColor;

    const swatchBtns = swatchesContainer.querySelectorAll(".detail-swatch-btn");
    swatchBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        swatchBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        selectedColor = btn.dataset.color;
        if (selectedColorLabel) selectedColorLabel.textContent = selectedColor;
      });
    });
  }

  // Populate Lens Options
  let selectedLens = product.lensOptions[0]?.name || "Standard";
  let activeLensOffset = 0;
  const lensContainer = document.getElementById("lensOptionsContainer");

  function updateDynamicPrice() {
    const finalPrice = product.price + activeLensOffset;
    if (priceCurrentEl) priceCurrentEl.textContent = window.formatINR(finalPrice);
  }

  if (lensContainer && product.lensOptions) {
    lensContainer.innerHTML = product.lensOptions
      .map(
        (lens, idx) => `
        <div class="lens-option-card ${idx === 0 ? "active" : ""}" data-name="${lens.name}" data-offset="${lens.priceOffset}">
          <div class="lens-option-info">
            <span class="lens-radio"></span>
            <span class="lens-title">${lens.name}</span>
          </div>
          <span class="lens-price-offset">
            ${lens.priceOffset > 0 ? "+ " + window.formatINR(lens.priceOffset) : "Included"}
          </span>
        </div>
      `
      )
      .join("");

    const lensCards = lensContainer.querySelectorAll(".lens-option-card");
    lensCards.forEach((card) => {
      card.addEventListener("click", () => {
        lensCards.forEach((c) => c.classList.remove("active"));
        card.classList.add("active");
        selectedLens = card.dataset.name;
        activeLensOffset = parseInt(card.dataset.offset, 10) || 0;
        updateDynamicPrice();
      });
    });
  }

  // Quantity Adjuster
  let quantity = 1;
  const qtyMinus = document.getElementById("qtyMinus");
  const qtyPlus = document.getElementById("qtyPlus");
  const qtyDisplay = document.getElementById("qtyDisplay");

  if (qtyMinus && qtyPlus && qtyDisplay) {
    qtyMinus.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--;
        qtyDisplay.textContent = quantity;
      }
    });

    qtyPlus.addEventListener("click", () => {
      quantity++;
      qtyDisplay.textContent = quantity;
    });
  }

  // Add to Cart Button
  const addToCartBtn = document.getElementById("detailAddToCartBtn");
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      const finalPrice = product.price + activeLensOffset;
      CartManager.addItem({
        id: product.id,
        name: product.name,
        price: finalPrice,
        selectedColor: selectedColor,
        selectedLens: selectedLens,
        image: product.primaryImage,
        qty: quantity
      });
    });
  }

  // Populate Specs Table
  const specsTable = document.getElementById("specsTableBody");
  if (specsTable && product.specs) {
    specsTable.innerHTML = Object.entries(product.specs)
      .map(
        ([key, val]) => `
        <tr>
          <td>${key}</td>
          <td>${val}</td>
        </tr>
      `
      )
      .join("");
  }

  // Highlights List
  const highlightsList = document.getElementById("highlightsList");
  if (highlightsList && product.highlights) {
    highlightsList.innerHTML = product.highlights
      .map(
        (h) => `
        <li style="margin-bottom:0.6rem;display:flex;align-items:center;gap:0.6rem;color:var(--color-text-main);">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-purple)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          ${h}
        </li>
      `
      )
      .join("");
  }
}

// Global Accordions (Product detail & FAQs)
function initAccordions() {
  const triggers = document.querySelectorAll(".accordion-trigger");
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".accordion-item");
      if (item) {
        item.classList.toggle("active");
      }
    });
  });
}

// Contact Form Handler (contact.html)
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector("[name='fullName']")?.value || "Client";
    const service = form.querySelector("[name='inquiryType']")?.value || "Inquiry";

    showToast("Inquiry Received", `Thank you, ${name}. Our concierge optical team will respond within 24 hours.`);
    form.reset();
  });
}

// Global Newsletter Subscription Handler
function initNewsletter() {
  const forms = document.querySelectorAll(".newsletter-form");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = form.querySelector("input[type='email']");
      if (emailInput && emailInput.value) {
        showToast("Subscribed to The LUMEN Journal", "Welcome. You will receive private previews and archival releases.");
        emailInput.value = "";
      }
    });
  });
}

// DOM Ready initialization
document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initCartDrawer();
  initProductsCatalog();
  initProductDetail();
  initAccordions();
  initContactForm();
  initNewsletter();
});

