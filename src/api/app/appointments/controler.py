from api.models.index import db, User, Appointment

def all_appointments():
    appointments = Appointment.query.all()
    list_appointments = []
    for appointment in appointments:
        list_appointments.append(appointment.serialize())
    return list_appointments
