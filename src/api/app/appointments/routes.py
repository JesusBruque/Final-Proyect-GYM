from flask import Flask, request, jsonify, url_for, Blueprint
from api.app.appointments.controler import all_appointments
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

appointments = Blueprint('appointments', __name__)

@appointments.route('/', methods=['GET'])
def get_appointments():
    list_appointments = all_appointments()

    return jsonify(list_appointments), 200