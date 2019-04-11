from app import db, ma
from marshmallow import fields
from .base import BaseModel

class Blog(db.Model, BaseModel):

    __tablename__ = 'blogs'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    text = db.Column(db.String(5000), nullable=False)


class BlogSchema(ma.ModelSchema):
    # comments = fields.Nested('CommentSchema', many=True, exclude=('planet',))
    # elements = fields.Nested('ElementSchema', many=True)
    # creator = fields.Nested('UserSchema', only=('id', 'username'))
    # liked_by = fields.Nested('UserSchema', many=True, only=('id', 'username'))

    class Meta:
        model = Blog
