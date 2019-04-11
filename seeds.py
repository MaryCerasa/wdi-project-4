from app import app, db
from models.blog import Blog
from models.user import UserSchema
user_schema = UserSchema()

with app.app_context():
    db.drop_all()
    db.create_all()

    buse, errors = user_schema.load({
        'username': 'buse',
        'email': 'buse@email.com',
        'password': 'password',
        'password_confirmation': 'password'
    })

    if errors:
        raise Exception(errors)

    db.session.add(buse)

    mary, errors = user_schema.load({
        'username': 'mary',
        'email': 'mary@email.com',
        'password': 'password',
        'password_confirmation': 'password'
    })

    if errors:
        raise Exception(errors)

    db.session.add(mary)

#pylint: disable=C0301
    # creating a blog
    buse_blog = Blog(title='Buse', text="Buse's blog")
    mary_blog = Blog(title='Mary', text="Mary's blog")

    # comment1 = Comment(content='I love this planet', planet=mercury)

    db.session.add(buse_blog)
    db.session.add(mary_blog)
    # db.session.add(comment1)

    db.session.commit()
