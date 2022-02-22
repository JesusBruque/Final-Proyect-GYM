from api.models.db import db

class Role(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    role = db.Column(db.String(20), nullable=False)

    def __repr__(self):
        return '<Role %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "role": self.role,
        }