function displayData() {
  let CartCon = document.getElementById("items");
  let totalPrice = document.getElementById("totalPrice");
  let products = JSON.parse(localStorage.getItem("cart")) || [];
  CartCon.innerHTML = "";
  totalPrice.innerHTML = ""; 

  if (products.length === 0) {
    CartCon.innerHTML = `<p>Cart is empty</p>`;
  } else {
    let total = 0;

    products.map((val, ind) => {
      total += val.price;
      let productDiv = document.createElement("div"); 
      productDiv.innerHTML = `      
        <div class="item">
          <main>
            <img src="${val.images[0]}" height="200" width="160"/>
          </main>
          <main>
            <h1>${val.title}</h1>
            <p>Availability Status : ${val.availabilityStatus}</p>
            <p>Category : ${val.category}</p>
            <p>Return Policy : ${val.returnPolicy}</p>
            <p>Shipping Information : ${val.shippingInformation}</p>
            <p>Warranty Information: ${val.warrantyInformation}</p>
            <p>Price : $${val.price}</p>
            <button class="remove" onclick="removeItem(${ind})">Remove</button>
          </main>
        </div>
      `;
      CartCon.append(productDiv);
    });

    totalPrice.innerHTML = `<h1>Total Price : $${total.toFixed(2)}</h1>`; 
  }
}
function removeItem(itemId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(itemId, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayData();  
    alert("Product removed from cart");
}
displayData();