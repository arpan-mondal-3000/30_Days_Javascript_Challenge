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

export { addToCart };
