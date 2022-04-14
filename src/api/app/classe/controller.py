import datetime
from api.models.index import db, User, Classe

def get_all_classes():
    classes = db.session.query(Classe).\
        filter(Classe.start >= datetime.datetime.utcnow()).all()
    list_classes = []
    for classe in classes:
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

def update_classe(body):
    try:
        if body['id'] is None:
            return False
        
        classe = db.session.query(Classe).filter(Classe.id == body['id']).first()
        if (classe.quota > classe.enrollees):
            Classe.query.filter(Classe.id == body['id']).update({"enrollees": classe.enrollees + 1})  
            db.session.commit()
            return classe.serialize()
        else:
            return 'Full classe'

    except Exception as err:
        db.session.rollback()
        print('[ERROR UPDATE GROUP CLASSE]: ', err)
        return None