function MyViewModel() {
  this.name = ko.observable("simon");
  this.total = ko.observable(0);
  this.products = ko.observableArray([
    { name: "Jeans", price: 100, quantity: 0 },
    { name: "Shirt", price: 200, quantity: 0 },
    { name: "T-shirt", price: 400, quantity: 0 },
    { name: "Shoes", price: 500, quantity: 0 },
  ]);

// this.products(this.products().map((data)=>{
//   return {name:data.name,price:data.price,quantity:ko.observable(data.quantity)}
// }))



  // this.products=this.products().map((data)=>{
  //   return data.quantity
  // })

  // this.products = ko.observableArray([
  //   { name: "Jeans", price: 100, quantity: ko.observable(0) },
  //   { name: "Shirt", price: 200, quantity: ko.observable(0) },
  //   { name: "T-shirt", price: 400, quantity: ko.observable(0) },
  //   { name: "Shoes", price: 500, quantity: ko.observable(0) },
  // ]);
  this.cart = ko.observableArray([]);

  //   function to add products to cart
  this.addProduct = (product) => {
    fetch("http://localhost:5000/api/cart", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        // push to local array if item successfully added to db
        // this.cart.push(product);
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }; //   function to remove products from the cart

  // function to change quantity

}
ko.applyBindings(new MyViewModel());
