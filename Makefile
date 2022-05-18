get:
	@curl localhost:5000/api/cart

delete:
	@curl -X DELETE localhost:5000/api/cart/1