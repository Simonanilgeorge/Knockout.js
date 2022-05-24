from flask_restful import Resource
from flask import request
from Models.cart import CartModel
from flask_jwt_extended import jwt_required


class Cart(Resource):

# get cart
    @jwt_required()
    def get(self):
        cart=CartModel.getAllItems()
        data=[{"id":item.id,"name":item.name,"price":item.price} for item in cart]
        return data

# add item to cart
    @jwt_required()
    def post(self):
        data=request.get_json()
        item=CartModel(data["name"],data["price"])
        item.saveToDb()
        return {"message":"item added to cart"}

# remove item from cart
    @jwt_required()
    def delete(self,id):
        print(id)
        item=CartModel.getItemById(id)
        if item:
            item.delete()
            return {"message":"item deleted"}
        return{"message":"item does not exist"}