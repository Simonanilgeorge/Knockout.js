from flask_restful import Resource
from flask import request

cart=[]
class Cart(Resource):

# get cart
    def get(self):
        return cart

# add item to cart
    def post(self):

        data=request.get_json()
        cart.append(data)
        print(cart)

        return {"message":"item added to cart"}

# remove item from cart
    def delete(self,id):
        cart.pop(int(id))
        return {"message":cart}