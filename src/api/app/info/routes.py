from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.info.controler import get_info_by_user_id, add_info, update_info, delete_user_info
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

infos = Blueprint('infos', __name__)

@infos.route("/", methods=['GET'])
@jwt_required()
def get_user_info():
    user_id = get_jwt_identity()
    info = get_info_by_user_id(user_id['id'])
    if info is None:
        return jsonify('info not found'), 404
    return jsonify(info.serialize()), 200

@infos.route("/<id>", methods=['GET'])
@jwt_required()
def get_user_info_to_worker(id):
    user_id = get_jwt_identity()
    info = get_info_by_user_id(id)
    if info is None:
        return jsonify('info not found'), 404
    return jsonify(info.serialize()), 200

@infos.route("/", methods=['POST'])
@jwt_required()
def add_user_info():
    body = request.get_json()
    user = get_jwt_identity()
    new_info = add_info(body, user['id'])

    if new_info is None:
        return jsonify('Internal server error'), 500
    elif new_info == False:
        return jsonify('Bad Request'), 400
    else:
        return jsonify(new_info), 201

@infos.route('/', methods=['PUT'])
@jwt_required()
def info_user_update():
    body = request.get_json(force=True)
    user = get_jwt_identity()
    new_info = update_info(body, user['id']) 
    print(new_info)
    
    if new_info == False:
        return jsonify('Info not found'), 404
    if new_info is None:
        return jsonify('Internal server error'), 500
    return jsonify(new_info), 200

@infos.route('/', methods=['DELETE'])
@jwt_required()
def info_user_delete():
    user = get_jwt_identity()
    info = get_info_by_user_id(user['id'])
    if info is None:
        return jsonify('Internal server error'), 500
    elif info == False:
        return jsonify('Bad Request'), 400
    else: 
        delete_user_info(info)
        return jsonify('Info deleted'), 200