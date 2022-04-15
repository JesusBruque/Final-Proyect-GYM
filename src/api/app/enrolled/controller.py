from api.models.index import db, User, Enrolled

def get_all_enrolleds(classe_id):
    enrolleds = db.session.query(Enrolled).\
        filter(Enrolled.classe_id == classe_id).all()
    list_enrolleds = []
    for enrolled in enrolleds:
        list_enrolleds.append(enrolled.serialize_with_customer())
    return list_enrolleds

def add_enrolled(classe_id, user_id):
    try:
        new_enrolled = Enrolled(classe_id=classe_id, customer_id=user_id)
        db.session.add(new_enrolled) 
        db.session.commit()
        return new_enrolled.serialize()

    except Exception as err:
        db.session.rollback()
        print('[ERROR ADD ENROLLED]: ', err)
        return None