from flask_restful import Resource
from flask import request
from Models.login import UserModel
from flask_jwt_extended import create_access_token, create_refresh_token, jwt_required, get_jwt_identity

class Login(Resource):

    def post(self):

        data=request.get_json()

        # add sample user to application
        # new_user=UserModel("test","test")
        # new_user.addUser()
        # return {"message":"new user added"}

        # fetch user from database
        user=UserModel.getUser(data["username"],data["password"])

        # check if user exists
        if user:
            access_token = create_access_token(identity = data["username"])
            return {"message":access_token}

        return {"message":None}


