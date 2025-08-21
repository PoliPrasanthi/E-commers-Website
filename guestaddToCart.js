function displayData() {
  let CartCon = document.getElementById("items");
  let totalPrice = document.getElementById("totalPrice");
  let products = JSON.parse(localStorage.getItem("cart")) || [];
  CartCon.innerHTML = "";
  totalPrice.innerHTML = ""; 

  
    CartCon.innerHTML = `<p>Cart is empty</p>`;

}
displayData();
