function MyLoginModel() {
    this.credentials = {
      username: ko.observable(""),
      password: ko.observable(""),
    };
    this.showMessage=ko.observable(false)

    this.login = () => {
      fetch("http://localhost:5000/api/login", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: ko.toJSON(this.credentials),
      })
        .then((response) => response.json())
        .then((data) => {
          // push to local array if item successfully added to db
          // this.cart.push(product);
          console.log("Success:", data);
          if (data.message) {
            window.location.href = "./ko.html";
            sessionStorage.setItem("token", data.message);
            this.showMessage(false)
          }
          else{
              sessionStorage.clear()
              this.showMessage(true)
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
  }

  ko.applyBindings(new MyLoginModel());