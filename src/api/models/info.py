from api.models.db import db
from api.models.user import User

class Info(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    medical_history = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship(User, backref='info')

    def __repr__(self):
        return '<Info %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "medical_history": self.medical_history,
            "user_id": self.user_id
        }