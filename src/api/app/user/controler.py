from api.shared.encrypte_pass import encryp_pass, compare_pass
from api.models.index import db, User, Role, Info
from flask_jwt_extended import create_access_token

from datetime import timedelta

def get_user_by_id(user_id):
    return User.query.get(user_id)

def register_user(body):
    avatar_default = "https://res.cloudinary.com/duxnadmyt/image/upload/v1647078884/png-clipart-business-google-account-organization-service-avatar-angle-heroes_qmgkd8.png"

    try:
        if body['password'] is None:
            return False

        if body['email'] is None:
            return False
        
        if body['first_name'] is None:
            return False

        if body['last_name'] is None:
            return False

        if body['phone'] is None:
            return False

        if body['role_name'] is None:
            return False

        role = db.session.query(Role).filter(Role.role_name == body['role_name']).first()
        if role is None:
            return False        

        hash_pass = encryp_pass(body['password'])
        new_user = User(email=body['email'], password=hash_pass, first_name=body['first_name'], last_name=body['last_name'], phone=body['phone'], is_active=True, role_id=role.id, avatar=avatar_default)
        db.create_all()
        db.session.add(new_user) 
        db.session.commit()
        return new_user.serialize()

    except Exception as err:
        db.session.rollback()
        print('[ERROR REGISTER USER]: ', err)
        return None


def login_user(body):
    try:
        if body['password'] is None:
            return False

        if body['email'] is None:
            return False

        user = db.session.query(User).filter(User.email == body['email']).first()
        if user is None:
            return 'user not exist'

        validate_pass = compare_pass(body['password'], user.password)
        if validate_pass == False:
            return 'pass not iqual'

        user_role = user.role_user()

        new_token = create_access_token(identity={'id': user.id}, expires_delta=timedelta(minutes=30))
        return { 'token': new_token, 'rol': user_role }
        
    except Exception as err:
        print('[ERROR LOGIN]: ', err)
        return None

def update_user(body, user_id):
    try:
        user = db.session.query(User).filter(User.id==user_id).first()
        if user is not None:
            user_json = user.serialize()
            for key, value in body.items():
                user_json[key] = value

            del user_json["id"]
            User.query.filter(User.id == user_id).update(user_json)  
            db.session.commit()
            return user.serialize()
        else:
            return False

    except Exception as err:
        print('[ERROR UPDATE]: ', err)
        return None

def get_role_id(role_name):
    role = db.session.query(Role).filter(Role.role_name == role_name).first()
    return role.id

def get_users_by_role_id(role_id):
    users = db.session.query(User).filter(User.role_id == role_id).all()
    list_users = []
    for user in users:
        list_users.append(user.serialize())
    return list_users
