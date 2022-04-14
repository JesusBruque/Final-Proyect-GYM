from api.models.db import db
from api.models.classe import Classe
from api.models.user import User

class Enrolled(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    classe_id = db.Column(db.Integer, db.ForeignKey('classe.id'))
    customer_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    classe = db.relationship(Classe, foreign_keys=[classe_id], backref='enrolled')
    customer = db.relationship(User, foreign_keys=[customer_id], backref='enrolled')

    def __repr__(self):
        return '<Enrolled %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "classe_id": self.classe_id,
            "customer_id": self.customer_id,
        }

    