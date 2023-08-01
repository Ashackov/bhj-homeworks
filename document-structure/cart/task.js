document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".product");
  const cartProducts = document.querySelector(".cart__products");

  // Function to update the product quantity
  function updateProductQuantity(quantityValue, change) {
    let quantity = parseInt(quantityValue.textContent, 10);
    quantity += change;
    if (quantity < 1) {
      quantity = 1;
    }
    quantityValue.textContent = quantity;
  }

  // Function to handle the click event on quantity controls
  function handleQuantityControls(event) {
    const target = event.target;
    const quantityValue = target.parentElement.querySelector(".product__quantity-value");
    if (target.classList.contains("product__quantity-control")) {
      const change = target.classList.contains("product__quantity-control_inc") ? 1 : -1;
      updateProductQuantity(quantityValue, change);
    }
  }

  // Function to add a product to the cart
  function addToCart(productId, productTitle, productImage, quantity) {
    const existingCartItem = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);
    if (existingCartItem) {
      const cartProductCount = existingCartItem.querySelector(".cart__product-count");
      const existingQuantity = parseInt(cartProductCount.textContent, 10);
      const newQuantity = existingQuantity + quantity;
      cartProductCount.textContent = newQuantity;
    } else {
      const cartProduct = document.createElement("div");
      cartProduct.classList.add("cart__product");
      cartProduct.setAttribute("data-id", productId);
      cartProduct.innerHTML = `
        <img class="cart__product-image" src="${productImage}">
        <div class="cart__product-count">${quantity}</div>
      `;
      cartProducts.appendChild(cartProduct);
    }
  }

  // Function to handle the click event on "Добавить в корзину" button
  function handleAddToCart(event) {
    const product = event.target.closest(".product");
    const productId = product.getAttribute("data-id");
    const productTitle = product.querySelector(".product__title").textContent;
    const productImage = product.querySelector(".product__image").getAttribute("src");
    const quantityValue = product.querySelector(".product__quantity-value");
    const quantity = parseInt(quantityValue.textContent, 10);
    addToCart(productId, productTitle, productImage, quantity);
  }

  // Add event listener to each product for quantity controls
  products.forEach((product) => {
    const quantityControls = product.querySelector(".product__quantity-controls");
    quantityControls.addEventListener("click", handleQuantityControls);
    const addToCartButton = product.querySelector(".product__add");
    addToCartButton.addEventListener("click", handleAddToCart);
  });
});
