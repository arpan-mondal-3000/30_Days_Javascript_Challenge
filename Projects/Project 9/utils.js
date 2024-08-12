// Add to cart functionality
function addToCart(e) {
  // Getting the cart quantity span
  const cartQuantity = document.querySelector("#amount");
  // Accessing data from localstorage
  const productsBought = localStorage.getItem("products");
  if (productsBought) {
    // If products is there then adding new item
    const productArr = JSON.parse(productsBought);
    productArr.push({ id: e.target.id, quantity: 1 });
    cartQuantity.innerHTML = productArr.length;
    localStorage.setItem("products", JSON.stringify(productArr));
  } else {
    // If products is not present then creating a products array in localstorage
    localStorage.setItem(
      "products",
      JSON.stringify([{ id: e.target.id, quantity: 1 }])
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

export { addToCart };
