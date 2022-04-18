from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.enrolled.controller import get_all_enrolleds, add_enrolled
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

enrolleds = Blueprint('enrolleds', __name__)

@enrolleds.route('/<classe_id>', methods=['GET'])
@jwt_required()
def get_enrolleds(classe_id):
    list_enrolleds = get_all_enrolleds(classe_id)

    return jsonify(list_enrolleds), 200

@enrolleds.route('/<classe_id>', methods=['POST'])
@jwt_required()
def add_enrolled_to(classe_id):
    user = get_jwt_identity()
    new_enrolled = add_enrolled(classe_id, user['id'])

    if new_enrolled is None:
        return jsonify('Internal server error'), 500
    elif new_enrolled == False:
        return jsonify('Bad Request'), 400
    else:
        return jsonify(new_enrolled), 201