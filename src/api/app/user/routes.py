from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.user.controler import register_user, login_user, get_user_by_id, update_user, get_info_by_user_id, add_info, update_info, delete_user_info
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from cloudinary.uploader import upload

users = Blueprint('users', __name__)

@users.route('/register', methods=['POST'])
def create_user():
    body = request.get_json()
    new_user = register_user(body)
    if new_user is None:
        return jsonify('Internal server error'), 500
    elif new_user == False:
        return jsonify('Bad Request'), 400
    else:
        return jsonify(new_user), 201

@users.route('/login', methods=['POST'])
def user_login():
    body = request.get_json()
    token = login_user(body)
    if token == 'user not exist':
        return jsonify(token), 404
    elif token == 'pass not iqual':
        return jsonify('user or password incorrect'), 401
    elif token is None :
        return jsonify('Internal server error'), 500
    else:
        return jsonify(token), 200
            
@users.route("/", methods=['GET'])
@jwt_required()
def get_user():
    user_id = get_jwt_identity()
    user = get_user_by_id(user_id['id'])
    if user is None:
        return jsonify('user not found'), 404
    return jsonify(user.serialize()), 200

# @users.route('/update', methods=['PUT'])
# @jwt_required()
# def user_update():
#     body = request.get_json()
#     user_id = get_jwt_identity()
#     new_data = update_user(body, user_id['id']) 
#     print(body)
#     print(user_id)
#     if new_data == False:
#         return jsonify('user not found'), 404
#     return jsonify(new_data), 200

@users.route("/update", methods=['PUT'])
@jwt_required()
def user_update():
    try:
        avatar = request.files['avatar']
        body = request.form.to_dict()
        user_id = get_jwt_identity()
        new_data = update_user(body, user_id['id'])
        url_img = upload(avatar)
        return jsonify(new_data, 200)
    except Exception as error:
        print(error)
        return jsonify("algo fue mal", 500)

# Comprobar funcionalidad en postman a partir de aquí
@users.route("/info", methods=['GET'])
@jwt_required()
def get_user_info():
    user_id = get_jwt_identity()
    info = get_info_by_user_id(user_id['id'])
    if info is None:
        return jsonify('info not found'), 404

    return jsonify(info.serialize()), 200

@users.route("/info", methods=['POST'])
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

@users.route('/info', methods=['PUT'])
@jwt_required()
def info_user_update():
    body = request.get_json()
    user = get_jwt_identity()
    new_info = update_info(body, user['id']) 
    
    if new_info == False:
        return jsonify('Info not found'), 404
    
    return jsonify(new_info), 200

@users.route('/info', methods=['DELETE'])
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
