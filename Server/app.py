import os
from flask import Flask
from flask_restful import Api
from flask_cors import CORS
# from db import db
from Resources.cart import Cart
from db import db
import sqlite3


app = Flask(__name__)
api = Api(app)
CORS(app)



app.config["SQLALCHEMY_DATABASE_URI"]="sqlite:///data.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"]=False
db.init_app(app)


@app.before_first_request
def create_tables():
    # db.drop_all()
    db.create_all()

api.add_resource(Cart,"/api/cart","/api/cart/<string:id>")
if __name__ == '__main__':
    # db.init_app(app)
    app.run(debug=True,host='0.0.0.0')