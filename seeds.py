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
    buse_blog = Blog(title="Buse's blog", text='Hi I am Buse', creator=buse)
    mary_blog = Blog(title="Mary's blog", text='Hi I am Mary', creator=mary)

    # comment1 = Comment(content='I love this blog', blog=buse_blog)
    # comment2 = Comment(content='I love this blog too', blog=mary_blog)

    db.session.add(buse_blog)
    db.session.add(mary_blog)
    # db.session.add(comment1)
    # db.session.add(comment2)

    db.session.commit()
