import datetime
from api.models.db import db
from api.models.user import User

class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    text = db.Column(db.String(280), nullable=False)
    user_sent = db.Column(db.Integer, db.ForeignKey('user.id'))
    user_receive = db.Column(db.Integer, db.ForeignKey('user.id'))
    to_user = db.relationship(User, foreign_keys=[user_sent])
    from_user = db.relationship(User, foreign_keys=[user_receive])

    def __repr__(self):
        return '<Message %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "create_at": self.created_at,
            "text": self.text,
            "user_sent": self.user_sent,
            "user_receive": self.user_receive
        }
