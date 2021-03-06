"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models.db import db
from api.app.user.routes import users
from api.app.appointments.routes import appointments
from api.app.message.routes import messages
from api.app.info.routes import infos
from api.app.classe.router import classes
from api.app.enrolled.router import enrolleds
from api.app.goals.routes import goals
from api.admin import setup_admin

import cloudinary

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# database configuration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config["JWT_SECRET_KEY"] = os.environ.get("JWT_SECRET_KEY")

app.config["CLOUD_NAME"] = os.environ.get("CLOUD_NAME")
app.config["CLOUD_API_KEY"] = os.environ.get("CLOUD_API_KEY")
app.config["CLOUD_API_SECRET"] = os.environ.get("CLOUD_API_SECRET")

MIGRATE = Migrate(app, db, compare_type = True)
db.init_app(app)
jwt = JWTManager(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

app.register_blueprint(users, url_prefix="/api/user")
app.register_blueprint(appointments, url_prefix="/api/appointments")
app.register_blueprint(messages, url_prefix="/api/message")
app.register_blueprint(infos, url_prefix="/api/info")
app.register_blueprint(classes, url_prefix="/api/classe")
app.register_blueprint(enrolleds, url_prefix="/api/enrolled")
app.register_blueprint(goals, url_prefix="/api/goal")

cloudinary.config( 
  cloud_name = app.config["CLOUD_NAME"], 
  api_key = app.config["CLOUD_API_KEY"], 
  api_secret = app.config["CLOUD_API_SECRET"],
  secure = True
)

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response

# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
