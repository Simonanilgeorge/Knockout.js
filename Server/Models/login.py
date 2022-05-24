# from Server.Resources.cart import Cart
from db import db


class UserModel(db.Model):

    __tablename__="login"
    id=db.Column(db.Integer,primary_key=True)
    username=db.Column(db.String(80))
    password=db.Column(db.String(80))

    def __init__(self,username,password):
        self.username=username
        self.password=password

    def addUser(self):
        db.session.add(self)
        db.session.commit()
    @classmethod
    def getUser(cls,username,password):
        return db.session.query(UserModel).filter(UserModel.username==username,UserModel.password==password).first()