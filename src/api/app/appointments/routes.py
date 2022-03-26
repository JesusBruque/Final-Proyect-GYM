from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.appointments.controler import get_appointments, add_appointment
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

appointments = Blueprint('appointments', __name__)

@appointments.route('/<worker_id>', methods=['GET'])
@jwt_required()
def get_appointments_id(worker_id):
    list_appointments = get_appointments(worker_id)

    return jsonify(list_appointments), 200

@appointments.route('/', methods=['GET'])
@jwt_required()
def get_my_appointments():
    user = get_jwt_identity()
    list_appointments = get_appointments(user['id'])

    return jsonify(list_appointments), 200

@appointments.route('/', methods=['POST'])
@jwt_required()
def add_user_appointment():
    body = request.get_json()
    user = get_jwt_identity()
    new_appointment = add_appointment(body, user['id'])

    if new_appointment is None:
        return jsonify('Internal server error'), 500
    elif new_appointment == False:
        return jsonify('Bad Request'), 400
    else:
        return jsonify(new_appointment), 201 