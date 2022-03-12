from flask import Flask, Blueprint
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from api.app.message.controler import message_create

users = Blueprint('users', __name__)

@users.route('/message', methods=['POST'])
def create_message:
    body = request.get_json()
    new_message = message_create(body)
    if new_message is None:
        return jsonify('Internal server error'), 500
    elif new_message == False:
        return jsonify('Bad Request'), 400
    else:
        return jsonify(new_message), 201