import os
from flask import Flask
from flask_restful import Api
from flask_cors import CORS
# from db import db
from Resources.cart import Cart
from Resources.login import Login
from db import db
import sqlite3
from flask_jwt_extended import JWTManager


app = Flask(__name__)
api = Api(app)
CORS(app)



app.config["SQLALCHEMY_DATABASE_URI"]="sqlite:///data.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"]=False
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = False
db.init_app(app)

jwt = JWTManager(app)
app.config['JWT_SECRET_KEY'] = 'knockout.js'


@app.before_first_request
def create_tables():
    # db.drop_all()
    db.create_all()

api.add_resource(Cart,"/api/cart","/api/cart/<string:id>")
api.add_resource(Login,"/api/login")
if __name__ == '__main__':
    # db.init_app(app)
    app.run(debug=True,host='0.0.0.0')