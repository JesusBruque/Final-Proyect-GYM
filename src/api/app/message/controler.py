from sqlalchemy import or_
from api.shared.encrypte_pass import encryp_pass, compare_pass
from api.models.index import db, User, Message, Role

def message_create(body, user_sent_id):
    try:
        if body['text'] is None:
            return False
        user = User.query.get(body['user_receive'])
        if user is None:
            return False
        new_message = Message(text=body['text'], user_sent=user_sent_id, user_receive=body['user_receive'])
        db.session.add(new_message)
        db.session.commit()
        return new_message.serialize()
    except Exception as err:
        db.session.rollback()
        print('[ERROR CREATE MESSAGE]: ', err)
        return None

def get_message_from_user(to_user_id, from_user_id):
    messages = db.session.query(Message).filter(or_(Message.user_sent == to_user_id, Message.user_sent == from_user_id), or_(Message.user_receive == from_user_id, Message.user_receive == to_user_id)).all()
    list_messages = []
    for message in messages:
        list_messages.append(message.json_with_user())
    return list_messages

def get_by_roles(role_id):
    roles = db.session.query(User).filter(User.role_id == role_id).all()
    list_by_roles = []
    for role in roles:
        list_by_roles.append(role.serialize())
    return list_by_roles