import datetime
from api.models.db import db
from api.models.role import Role

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    first_name = db.Column(db.String(80), nullable=False)
    last_name = db.Column(db.String(80), nullable=False)
    phone = db.Column(db.String(80), nullable=False)
    avatar = db.Column(db.Text)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False, default=True)
    role_id = db.Column(db.Integer, db.ForeignKey('role.id'))
    role = db.relationship(Role, backref='user')

    def __repr__(self):
        return '<User %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "email": self.email,
            "phone": self.phone,
            "avatar": self.avatar,
            "role_id": self.role_id
        }

    def role_user(self):
        return {
            "role": self.role.serialize()
        }

    def serialize_password(self):
        return {
            "password": self.password,
        }