import datetime
from api.models.db import db
from api.models.role import Role

class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    text = db.Column(db.String(280), nullable=False)
    user_1_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user_2_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user_1 = db.relationship(User, foreign_keys=[user_1_id])
    user_2 = db.relationship(User, foreign_keys=[user_2_id])

    def __repr__(self):
        return '<Message %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "create_ad": self.first_name,
            "text": self.last_name,
        }
