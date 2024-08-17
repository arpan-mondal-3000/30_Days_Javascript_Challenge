// Add to cart functionality
function addToCart(e) {
  // Getting the cart quantity span
  const cartQuantity = document.querySelector("#amount");
  // Accessing data from localstorage
  const productsBought = localStorage.getItem("products");
  // Accessing the whole product HTML node to store details in the localstorage
  const product = document.querySelector(`#${e.target.id}`);
  if (productsBought) {
    // If products are there then adding new item
    const productArr = JSON.parse(productsBought);
    productArr.push({
      id: e.target.id,
      quantity: 1,
      productDetails: {
        productName: product.children[1].children[0].innerText,
        productPrice: product.children[1].children[2].innerText,
        productImage: product.children[0].children[0].src,
      },
    });
    cartQuantity.innerHTML = productArr.length;
    localStorage.setItem("products", JSON.stringify(productArr));
  } else {
    // If products is not present then creating a products array in localstorage
    localStorage.setItem(
      "products",
      JSON.stringify([
        {
          id: e.target.id,
          quantity: 1,
          productDetails: {
            productName: product.children[1].children[0].innerText,
            productPrice: product.children[1].children[2].innerText,
            productImage: product.children[0].children[0].src,
          },
        },
      ])
    );
    cartQuantity.innerHTML = 1;
  }

  // Disabling the button whose product is added
  e.target.innerHTML = "Added";
  e.target.style.backgroundColor = "#f08700";
  e.target.style.borderColor = "#f08700";
  e.target.style.color = "white";
  e.target.setAttribute("disabled", "true");
}

// Remove from cart functionality
function removeFromCart(e) {
  // Accessing the localstorage for removing the product
  const localProducts = localStorage.getItem("products");
  // Converting it into json
  const jsonProducts = JSON.parse(localProducts);
  // Looping over all the products and removing the desired one and storing it in a new array
  const updatedProducts = jsonProducts.filter(
    (product) => product.id !== e.target.id
  );
  // Setting it in localStorage
  localStorage.setItem("products", JSON.stringify(updatedProducts));

  // Removing the element from the DOM
  const main = document.querySelector("main");
  const productTobeRemoved = document.querySelector(`#${e.target.id}`);
  main.removeChild(productTobeRemoved);

  // Updating the cart amount
  const amount = document.querySelector("#amount");
  amount.innerHTML = updatedProducts.length;

  // Showing cart is empty if cart is empty
  if (!updatedProducts.length) {
    main.innerHTML = "<h1>Your cart is empty<br/>Keep Shopping :)</h1>";
  }
}

export { addToCart, removeFromCart };
