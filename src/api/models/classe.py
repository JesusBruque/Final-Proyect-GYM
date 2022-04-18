import datetime
from api.models.db import db
from api.models.user import User

class Classe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    worker_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    title = db.Column(db.String(240), nullable=False)
    start = db.Column(db.DateTime, nullable=False)
    end = db.Column(db.DateTime, nullable=False)
    quota = db.Column(db.Integer, nullable=False)
    enrollees = db.Column(db.Integer, default=0)
    worker = db.relationship(User, foreign_keys=[worker_id], backref='classe')

    def __repr__(self):
        return '<Classe %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "worker_id": self.worker_id,
            "title": self.title,
            "start": self.start,
            "end": self.end,
            "quota": self.quota,
            "enrollees": self.enrollees
        }

    def serialize_with_worker(self):
        return {
            "id": self.id,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "worker_id": self.worker_id,
            "title": self.title,
            "start": self.start,
            "end": self.end,
            "quota": self.quota,
            "enrollees": self.enrollees,
            "worker": self.worker.serialize(),
        }