from api.shared.encrypte_pass import encryp_pass, compare_pass
from api.models.index import db, User, Message

def message_create(body):
    try:
        if body['text'] is None:
            return False

    new_message = Message(message=body['message'])
    db.session.add(new_message)
    db.session.commit()
    return new_message.serialize()