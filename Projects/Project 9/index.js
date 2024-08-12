let dataUrl = "./data.json";

// fetching product data
fetch(dataUrl)
  .then((res) => res.json())
  .then((data) => {
    // Using the main tag to append the products
    const main = document.querySelector("main");
    let i = 1;
    // looping over mobiles only
    for (let product of data.products) {
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
      new_product.className = "product-container";
      new_product.id = product_id;

      new_product.innerHTML = `
        <div class="product-img">
          <img
            src="${img_url}"
            alt="product image"
          />
        </div>
        <div class="product-details">
           <div class="product-name">
              ${product_title}
           </div>
           <div class="specs">
                ${specs}
           </div>
           <div class="price">
                &#8377 ${price}
           </div>
            <div class="buttons">
            <button class="btn add" id="${product_id}">
                Add to cart        
            </button>
            <button class="btn buy" id="${product_id}">
                Buy now 
            </button>
        </div>
    `;

      main.appendChild(new_product);
      if (i == 10) break;
      i++;
    }

    // Add to cart functionality
    document.querySelectorAll(".add").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        console.log(e.target.id);
      });
    });
  });
