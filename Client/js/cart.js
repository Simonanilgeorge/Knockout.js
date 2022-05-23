function MyCartModel() {
  this.cart = ko.observableArray([]);
  this.total = ko.observable(0);

  // function to get items from cart
  $.getJSON("http://localhost:5000/api/cart", (data) => {
    // populate products array with response from the server
    this.cart(data);
    // find total price of all products
    if (data.length != 0) {
      this.total(data.map((data) => data.price).reduce((a, b) => a + b));
    } else {
      this.total(0);
    }
  });

  // function to remove item from cart
  this.removeFromCart = (index, product) => {
    console.log(product)
    $.ajax({
      type: "DELETE",
      url: `http://localhost:5000/api/cart/${product.id}`,
      success: (result) => {
        // if item is successfully deleted from cart; then remove it from the local array
        this.cart.splice(index(), 1);
        if (this.cart().length != 0) {
          this.total(this.cart().map((data) => data.price).reduce((a, b) => a + b));
        } else {
          this.total(0);
        }
        console.log(result);
      },
      error: (error) => {
        console.log("error", error);
      },
    });
  };
}

ko.applyBindings(new MyCartModel());
