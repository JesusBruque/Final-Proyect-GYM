from api.shared.encrypte_pass import encryp_pass, compare_pass
from api.models.index import db, User, Role, Info
from flask_jwt_extended import create_access_token

def get_info_by_user_id(user_id):
    info = db.session.query(Info).filter(Info.user_id == user_id).first()
    return info

def add_info(body, user_id):
    try:
        if body['medical_history'] is None:
            return False
     
        new_info = Info(medical_history=body['medical_history'], user_id=user_id)
        db.session.add(new_info) 
        db.session.commit()
        return new_info.serialize()

    except Exception as err:
        db.session.rollback()
        print('[ERROR ADD INFO USER]: ', err)
        return None

def update_info(body, user_id):
    try:
        info = db.session.query(Info).filter(Info.user_id==user_id).first()
        if info is not None:
            info_json = info.serialize()
            for key, value in body.items():
                info_json[key] = value

            del info_json["id"]
            Info.query.filter(Info.user_id == user_id).update(info_json)  
            db.session.commit()
            return info.serialize()
        else:
            return False

    except Exception as err:
        print('[ERROR UPDATE INFO]: ', err)
        return None
    
def delete_user_info(info):
    db.session.delete(info)
    db.session.commit()
    return True