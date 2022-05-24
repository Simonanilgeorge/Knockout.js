function MyCartModel() {

  if (!sessionStorage.getItem("token")) {
    window.location.href = "./login.html";
  }

  this.cart = ko.observableArray([]);
  this.total = ko.observable(0);



  // set headers for ajax request
  $.ajaxSetup({
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });

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
    console.log(product);
    $.ajax({
      type: "DELETE",
      url: `http://localhost:5000/api/cart/${product.id}`,
      success: (result) => {
        // if item is successfully deleted from cart; then remove it from the local array
        this.cart.splice(index(), 1);
        if (this.cart().length != 0) {
          this.total(
            this.cart()
              .map((data) => data.price)
              .reduce((a, b) => a + b)
          );
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

  this.logout=()=>{
    sessionStorage.clear()
    window.location.href="./login.html"
  }
}

ko.applyBindings(new MyCartModel());
