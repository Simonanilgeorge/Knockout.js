function MyViewModel() {

  this.name = ko.observable("simon");
  this.total = ko.observable(0);
  this.products = ko.observableArray([
    { name: "Jeans", price: 100 },
    { name: "Shirt", price: 200 },
    { name: "T-shirt", price: 400 },
    { name: "Shoes", price: 500 },
  ]);
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




}
ko.applyBindings(new MyViewModel());
