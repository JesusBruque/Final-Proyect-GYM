from api.models.index import db

class Role(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    role = db.Column(db.Integer, nullable=False, unique=True)

    def __repr__(self):
        return '<Role %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "role": self.role,
        }