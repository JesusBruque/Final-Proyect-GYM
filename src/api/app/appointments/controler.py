import datetime
from api.models.index import db, User, Appointment

def get_appointments(user_id):
    appointments = db.session.query(Appointment).\
        filter(Appointment.worker_id == user_id, Appointment.start >= datetime.datetime.utcnow()).all()
    list_appointments = []
    for appointment in appointments:
        list_appointments.append(appointment.serialize())
    return list_appointments

def add_appointment(body, user_id):
    try:
        if body['start'] is None:
            return False
        if body['end'] is None:
            return False
        
        new_appointment = Appointment(start=body['start'], end=body['end'], costumer_id=user_id, worker_id=body['worker_id'])
        db.session.add(new_appointment) 
        db.session.commit()
        return new_appointment.serialize()

    except Exception as err:
        db.session.rollback()
        print('[ERROR ADD APPOINTMENT USER]: ', err)
        return None