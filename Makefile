get:
	@curl localhost:5000/api/cart

delete:
	@curl -X DELETE localhost:5000/api/cart/6

post:
	@curl -X POST -H "Content-Type:application/json" -d '{"name":"jeans","price":200}' localhost:5000/api/cart -H "Authorization:Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY1MzM4ODA4OCwianRpIjoiN2M1NWNiN2EtZDI2NC00MDQyLTlkMzAtMzQ3NjllZjAxZmQ2IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6InNpbW9uIiwibmJmIjoxNjUzMzg4MDg4fQ.0acVmaxxO2PvbrYiYhXM-5NrSpiIbZVgDsAFRsHA5MY"

#put:
#	@curl -X POST -H "Content-Type:application/json" -d '{"username":"simon","password":"simon"}' localhost:5000/api/login



