function MyViewModel() {
  this.name = ko.observable("simon");
  this.total = ko.observable(0);

  this.cart = ko.observableArray([]);
  //   this.firstname=ko.observable("abc")
  //   this.lastname=ko.observable("def")
  //   this.fullname=ko.computed(()=>{
  //       return this.firstname()+this.lastname()
  //   })

  this.products = ko.observableArray([
    { name: "Jeans", price: 100 },
    { name: "Shirt", price: 200 },
    { name: "T-shirt", price: 400 },
    { name: "Shoes", price: 500 },
  ]);
  //   function to add products to cart
  this.addProduct = (product) => {
    this.cart.push(product);
    // this.total=ko.computed(()=>{
    //     return this.total() + product.price;
    // })
    this.total(this.total() + product.price);
    console.log(this.total());
  }; //   function to remove products from the cart
  this.removeProduct = (index, product) => {
    this.cart.splice(index(), 1);
    this.total(this.total() - product.price);
    // this.total =ko.computed(()=>{
    //     return this.total() - product.price;
    // })
    console.log(this.total());
  };
}
ko.applyBindings(new MyViewModel());
