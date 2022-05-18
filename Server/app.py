import os
from flask import Flask
from flask_restful import Api
from flask_cors import CORS
# from db import db
from Resources.items import Cart
app = Flask(__name__)
api = Api(app)
CORS(app)


api.add_resource(Cart,"/api/cart","/api/cart/<string:id>")
if __name__ == '__main__':
    # db.init_app(app)
    app.run(debug=True,host='0.0.0.0')