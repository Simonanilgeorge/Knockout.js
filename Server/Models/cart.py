# from Server.Resources.cart import Cart
from db import db


class CartModel(db.Model):

    __tablename__="cart"
    id=db.Column(db.Integer,primary_key=True)
    name=db.Column(db.String(80))
    price=db.Column(db.Integer)

    def __init__(self,name,price):
        self.name=name
        self.price=price

    def saveToDb(self):

        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
    @classmethod
    def getAllItems(cls):
        return db.session.query(CartModel).all()
    @classmethod
    def getItemById(cls,id):
        print(id)

        return db.session.query(CartModel).filter(CartModel.id==id).first()

