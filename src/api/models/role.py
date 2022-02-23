from api.models.db import db

class Role(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    role = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, ForeignKey('user.id'))
    

    def __repr__(self):
        return '<Role %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "role": self.role,
        }