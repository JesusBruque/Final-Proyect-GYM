from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.classe.controller import get_all_classes, add_group_classe, update_classe
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

classes = Blueprint('classes', __name__)

@classes.route('/', methods=['GET'])
@jwt_required()
def get_classes():
    list_classes = get_all_classes()

    return jsonify(list_classes), 200

@classes.route('/', methods=['POST'])
@jwt_required()
def add_classe():
    body = request.get_json()
    new_classe = add_group_classe(body)

    if new_classe is None:
        return jsonify('Internal server error'), 500
    elif new_classe == False:
        return jsonify('Bad Request'), 400
    else:
        return jsonify(new_classe), 201

@classes.route('/', methods=['PUT'])
@jwt_required()
def join_classe():
    body = request.get_json()
    user = get_jwt_identity()
    new_classe = update_classe(body)

    if new_classe is None:
        return jsonify('Internal server error'), 500
    elif new_classe == False:
        return jsonify('Bad Request'), 400
    else:
        return jsonify(new_classe), 201