from app import db, ma
from marshmallow import fields
from .base import BaseModel

class Blog(db.Model, BaseModel):

    __tablename__ = 'blogs'

    title = db.Column(db.String(100), nullable=False)
    text = db.Column(db.String(5000), nullable=False)
    creator_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    creator = db.relationship('User', backref='blogs')


class BlogSchema(ma.ModelSchema):
    comments = fields.Nested('CommentSchema', many=True, exclude=('blog',))
    creator = fields.Nested('UserSchema', only=('id', 'username'))

    class Meta:
        model = Blog

class Comment(db.Model, BaseModel):

    __tablename__ = 'comments'

    content = db.Column(db.Text, nullable=False)
    blog_id = db.Column(db.Integer, db.ForeignKey('blogs.id'))
    creator_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    blog = db.relationship('Blog', backref='comments')
    creator = db.relationship('User', backref='comments')

class CommentSchema(ma.ModelSchema):
    creator = fields.Nested('UserSchema', only=('id', 'username'))

    class Meta:
        model = Comment

class Profile(db.Model, BaseModel):

    __tablename__ = 'profiles'

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    content = db.Column(db.Text, nullable=False)
    image_url = db.Column(db.Text)

class ProfileSchema(ma.ModelSchema):

    class Meta:
        model = Profile
