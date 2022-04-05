from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.goals.controler import get_goals_by_user_id, add_goal, update_goal, delete_goal
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

goals = Blueprint('goals', __name__)

@goals.route("/", methods=['GET'])
@jwt_required()
def get_goals():
    user_id = get_jwt_identity()
    goals = get_goals_by_user_id(user_id['id'])
    if goals is None:
        return jsonify('goal is empty'), 404
    return jsonify(goals), 200

@goals.route("/", methods=['POST'])
@jwt_required()
def add_goals():
    body = request.get_json()
    user = get_jwt_identity()
    new_goal = add_goal(body, user['id'])

    if new_goal is None:
        return jsonify('Internal server error'), 500
    elif new_goal == False:
        return jsonify('Bad Request'), 400
    else:
        return jsonify(new_goal), 201

@goals.route('/', methods=['PUT'])
@jwt_required()
def goal_update():
    body = request.get_json()
    user = get_jwt_identity()
    new_goal = update_goal(body, user['id']) 
    
    if new_goal == False:
        return jsonify('Goal not found'), 404
    return jsonify(new_goal), 200

@goals.route('/', methods=['DELETE'])
@jwt_required()
def goal_delete():
    body = request.get_json()
    user = get_jwt_identity()
    delete = delete_goal(body, user['id'])
    if delete is None:
        return jsonify('Internal server error'), 500
    elif delete == False:
        return jsonify('Bad Request'), 400
    else: 
        return jsonify('Goal deleted'), 200