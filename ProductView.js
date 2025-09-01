let productDetails = document.getElementById("productCon")
let selectedID = localStorage.getItem("selectedProductId")
let products = JSON.parse(localStorage.getItem("products"))

if(selectedID && products){
    let selectedProduct = products.find(val => val.id == selectedID)
    console.log(selectedProduct);
    if(selectedProduct){
         productDetails.innerHTML = `
            <div class="product">
            <section>
             <img src="${selectedProduct.images[0]}" height="300" width="260"/>
             </section>
             <section>
               <h1>${selectedProduct.title}</h1>
               <p> <b>Brand : </b>${selectedProduct.brand} </p>
               <p> <b>Category : </b>${selectedProduct.category} </p>
               <p> <b>Description : </b>${selectedProduct.description} </p>
               <p> <b>Price : </b>$${selectedProduct.price} </p>
               <main>
               <button class="button" id="addTocart">add to cart</button>
               <button class="button-1"><a href="home.html">Back to Home</a></button>
               </main>
             </section>
            </div>
            <div class="review">
              <h1>Customer Reviews</h1>
              ${selectedProduct.reviews.map(val=>`
              <section>

                    <p>${ '❤️'.repeat(val.rating)} ${'🖤'.repeat(5-val.rating)} </p>
                    <p>${val.comment}</p>
                    <p>By ${val.reviewerName} on ${new Date(val.date).toLocaleDateString()}</p>
                </section>

                `).join("")}
            </div>
         `
         document.getElementById("addTocart").addEventListener("click",()=>{
             addCart(selectedProduct)
         })
    }else{
    productDetails.innerHTML = `<p>No Product found</p>`
    }
}else{
    productDetails.innerHTML = `<p>No Product Selected</p>`
}
console.log(selectedID);
console.log(products);


function addCart(product){
   let cart = JSON.parse(localStorage.getItem("cart"))  ||  []
   cart.push(product)

   localStorage.setItem("cart",JSON.stringify(cart))

   alert("product is added to the cart")

}
