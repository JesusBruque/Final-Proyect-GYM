import datetime
from api.models.db import db

class Appointment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    costumer_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    worker_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    start = db.Column(db.DateTime, nullable=False)
    end = db.Column(db.DateTime, nullable=False)
    costumer = db.relationship('User', foreign_keys=[costumer_id])
    worker = db.relationship('User', foreign_keys=[worker_id])

    def __repr__(self):
        return '<Appointment %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "costumer_id": self.costumer_id,
            "worker_id": self.worker_id,
            "start": self.start,
            "end": self.end,
        }