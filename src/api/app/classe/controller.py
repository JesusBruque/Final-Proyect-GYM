import datetime
from api.models.index import db, User, Classe, Enrolled

def get_all_classes():
    classes = db.session.query(Classe).\
        filter(Classe.start >= datetime.datetime.utcnow()).all()
    list_classes = []
    for classe in classes:
        list_classes.append(classe.serialize_with_worker())
    return list_classes

def get_all_my_classes(user_id):
    list_classes = []
    list_enrolled = db.session.query(Enrolled).filter(Enrolled.customer_id == user_id).all()
    if list_enrolled is None:
        return list_classes
    for enrolled in list_enrolled:
        classe = db.session.query(Classe).filter(Classe.id == enrolled.classe_id and Classe.start >= datetime.datetime.utcnow()).first()
        list_classes.append(classe.serialize_with_worker())
    return list_classes

def add_group_classe(body):
    try:
        if body['title'] is None:
            return False
        if body['start'] is None:
            return False
        if body['end'] is None:
            return False
        if body['quota'] is None:
            return False

        new_classe = Classe(title=body['title'], start=body['start'], end=body['end'], quota=body['quota'], worker_id=body['worker_id'])
        db.session.add(new_classe) 
        db.session.commit()
        return new_classe.serialize()

    except Exception as err:
        db.session.rollback()
        print('[ERROR ADD GROUP CLASSE]: ', err)
        return None

def update_classe(body, user_id):
    try:
        if body['classe_id'] is None:
            return False

        enrolleds = db.session.query(Enrolled).filter(Enrolled.classe_id == body['classe_id']).all()
        for enrolled in enrolleds:
            if enrolled.customer_id == user_id:
                return 'Already enrolled'
        
        classe = db.session.query(Classe).filter(Classe.id == body['classe_id']).first()
        if classe.quota == classe.enrollees:
            return 'Full classe'
        else:
            Classe.query.filter(Classe.id == body['classe_id']).update({"enrollees": classe.enrollees + 1})
            new_enrolled = Enrolled(classe_id=body['classe_id'], customer_id=user_id)  
            db.session.add(new_enrolled)
            db.session.commit()
            return classe.serialize()
     
    except Exception as err:
        db.session.rollback()
        print('[ERROR UPDATE GROUP CLASSE]: ', err)
        return None