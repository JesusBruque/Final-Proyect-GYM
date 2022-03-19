from flask import Flask, Blueprint, request, jsonify
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from api.app.message.controler import message_create, get_message_from_user, get_by_roles

messages = Blueprint('messages', __name__)

@messages.route('/', methods=['POST'])
@jwt_required()
def create_message():
    user_sent = get_jwt_identity()
    body = request.get_json()
    new_message = message_create(body, user_sent["id"])
    if new_message is None:
        return jsonify('Internal server error'), 500
    elif new_message == False:
        return jsonify('Bad Request'), 400
    else:
        return jsonify(new_message), 201

@messages.route("/<from_user_id>", methods=['GET'])
@jwt_required()
def get_message(from_user_id):
    user = get_jwt_identity()
    list_messages = get_message_from_user(user['id'], from_user_id)
    if user is None:
        return jsonify('message not found'), 404
    return jsonify(list_messages), 200

@messages.route("/roles/<role_id>", methods=['GET'])
def get_role(role_id):
    list_by_roles = get_by_roles(role_id)
    return jsonify(list_by_roles), 200