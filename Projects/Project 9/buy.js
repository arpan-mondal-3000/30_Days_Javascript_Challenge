import { removeFromCart } from "./utils.js";

// Using url parameter to get the id of the product
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

// Setting the amount in cart
const productsBought = localStorage.getItem("products");
const cartQuantity = document.querySelector("#amount");
if (productsBought) {
  const productArr = JSON.parse(productsBought);
  cartQuantity.innerHTML = productArr.length;
}

// Looping over product data to find the required product
let dataUrl = "./data.json";
fetch(dataUrl)
  .then((res) => res.json())
  .then((data) => {
    //  console.log(data.products);
    const main = document.querySelector("main");
    let i = 1;
    // looping over mobiles only and finding the required product
    for (let product of data.products) {
      if (product.id === id) {
        // Getting product title and removing the texts in parenthesis
        const product_title = product.title.replace(/\(.+\)/g, "");
        // Getting the product specifications which are the texts inside parenthesis
        const specs = product.title
          .match(/\(.+\)/g)
          .map((match) => match.slice(1, -1));
        // Getting the image url and changing the main domain to the new one
        const img_url = product.imgs[0].replace(
          /gitcdn.link\/cdn/g,
          "raw.githubusercontent.com/"
        );
        // Getting price
        const price = product.price;
        // Getting id
        const product_id = product.id;

        // creating a new product
        const new_product = document.createElement("div");
        new_product.className = "bill-container";
        new_product.id = product_id;

        new_product.innerHTML = `
            <div class="bill-head">Billing details</div>

            <div class="bill-products">
               <div class="bill-product-details">
                  <div class="bill-product-img">
                     <img
                     src="${img_url}"
                     alt="product image"
                     />
                  </div>
                  <div class="bill-name-specs">
                     <div class="product-name">
                        ${product_title}
                     </div>
                     <div class="specs">
                           <b>Specs:</b> ${specs}
                     </div>
                     <div class="item-price">
                        <b>Price:</b> &#8377 ${price}
                     </div>
                  </div>
               </div>
            </div>
            
            <div class="price bill-total">
                  Total: &#8377 ${price}
            </div>

            <div class="buttons">
               <button class="btn place-order">
                     Place order now
               </button>
            </div>
         `;

        main.appendChild(new_product);
        if (i == 10) break;
        i++;
      }
    }

    // Place order functionality
    document.querySelector(".place-order").addEventListener("click", (e) => {
      const main = document.querySelector("main");
      main.innerHTML =
        "<div class='confirmation'><h1>Order Placed<br>Thanks for shopping from E-buy<br>Redirecting you to home page...</h1></div>";

      // Accessing the localstorage for removing the product
      const localProducts = localStorage.getItem("products");
      // Converting it into json
      const jsonProducts = JSON.parse(localProducts);
      // Looping over all the products and removing the desired one and storing it in a new array
      const updatedProducts = jsonProducts.filter(
        (product) => product.id !== id
      );
      // Setting it in localStorage
      localStorage.setItem("products", JSON.stringify(updatedProducts));

      // Updating the cart amount
      const amount = document.querySelector("#amount");
      amount.innerHTML = updatedProducts.length;

      setTimeout(() => window.location.assign("/"), 1000);
    });
  });
