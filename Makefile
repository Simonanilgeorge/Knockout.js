get:
	@curl localhost:5000/api/cart

delete:
	@curl -X DELETE localhost:5000/api/cart/6

post:
	@curl -X POST -H "Content-Type:application/json" -d '{"name":"jeans","price":200}' localhost:5000/api/cart

#put:
#	@curl -X POST -H "Content-Type:application/json" -d '{"name":"jeans","price":200}' localhost:5000/api/cart