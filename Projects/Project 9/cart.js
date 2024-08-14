// Updating the amount of items in nav bar and rendering the products in DOM
const data = localStorage.getItem("products");
const amount = document.querySelector("#amount");
if (data) {
  // Updating the amount in nav bar
  const jsonData = JSON.parse(data);
  amount.innerHTML = jsonData.length;

  // Rendering products in DOM
  const main = document.querySelector("main");

  jsonData.forEach((product) => {
    const new_product = document.createElement("div");
    new_product.className = "product-container";
    new_product.id = product.id;

    new_product.innerHTML = `
        <div class="product-img">
          <img
            src="${product.productDetails.productImage}"
            alt="product image"
          />
        </div>
        <div class="product-details">
           <div class="product-name">
              ${product.productDetails.productName}
           </div>
           <div class="price">
                ${product.productDetails.productPrice}
           </div>
            <div class="buttons">
            <button class="btn buy" id="${product.id}">
                Buy now 
            </button>
            <button class="btn remove" id="${product.id}">
                Remove from cart
            </button>
            </div>
        </div>
    `;

    main.appendChild(new_product);
  });
} else {
  amount.innerHTML = "0";
}
