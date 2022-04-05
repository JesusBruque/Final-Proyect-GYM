from api.models.db import db
from api.models.user import User
from api.models.info import Info

class Goal(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    goals = db.Column(db.String(180), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship(User, backref='goals')
    info_id = db.Column(db.Integer, db.ForeignKey('info.id'))
    info = db.relationship(Info)

    def __repr__(self):
        return '<Goal %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "goals": self.goals,
            "user_id": self.user_id,
            "info_id": self.info_id
        }