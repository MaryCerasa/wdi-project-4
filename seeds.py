from app import app, db
from models.blog import Blog, Comment
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

    phoebe, errors = user_schema.load({
        'username': 'phoebe',
        'email': 'phoebe@email.com',
        'password': 'password',
        'password_confirmation': 'password'
    })

    if errors:
        raise Exception(errors)

    db.session.add(phoebe)

    paul, errors = user_schema.load({
        'username': 'paul',
        'email': 'paul@email.com',
        'password': 'password',
        'password_confirmation': 'password'
    })

    if errors:
        raise Exception(errors)

    db.session.add(paul)

    chris, errors = user_schema.load({
        'username': 'chris',
        'email': 'chris@email.com',
        'password': 'password',
        'password_confirmation': 'password'
    })

    if errors:
        raise Exception(errors)

    db.session.add(chris)

    jade, errors = user_schema.load({
        'username': 'jade',
        'email': 'jade@email.com',
        'password': 'password',
        'password_confirmation': 'password'
    })

    if errors:
        raise Exception(errors)

    db.session.add(jade)

    ryan, errors = user_schema.load({
        'username': 'ryan',
        'email': 'ryan@email.com',
        'password': 'password',
        'password_confirmation': 'password'
    })

    if errors:
        raise Exception(errors)

    db.session.add(ryan)

    celine, errors = user_schema.load({
        'username': 'celine',
        'email': 'celine@email.com',
        'password': 'password',
        'password_confirmation': 'password'
    })

    if errors:
        raise Exception(errors)

    db.session.add(celine)

    charlotte, errors = user_schema.load({
        'username': 'charlotte',
        'email': 'charlotte@email.com',
        'password': 'password',
        'password_confirmation': 'password'
    })

    if errors:
        raise Exception(errors)

    db.session.add(charlotte)

    jason, errors = user_schema.load({
        'username': 'jason',
        'email': 'jasone@email.com',
        'password': 'password',
        'password_confirmation': 'password'
    })

    if errors:
        raise Exception(errors)

    db.session.add(jason)

#pylint: disable=C0301
    buse_blog = Blog(title="Buse's Blog", text='Hi there, I am Buse', creator=buse)

    mary_blog = Blog(title="Mary's Blog", text="Hi I am Mary", creator=mary)

    phoebe_blog = Blog(title="11 Instagram Accounts That Never Fail To Give Me a Lift", text="One thing we love about the Internet is that it opens the door for conversation about mental health.", creator=phoebe)

    paul_blog = Blog(title="How I Made Work, Work For Me", text="Learning a new skill and starting my own business has transformed my life!", creator=paul)

    buse_blog = Blog(title="9 No-Nonsense Self-Care Ideas", text="Set time for yourself each week.", creator=buse)

    chris_blog = Blog(title="How To Be Mindful Of Your Digital Boundaries", text="Limit the social media content you access.", creator=chris)

    jade_blog = Blog(title="How To Start Openly Talking About Your Mental Health", text=" Deciding to be open about our mental health is a very personal decision. There is no right or wrong answer, and nobody can make the decision for us.", creator=jade)

    ryan_blog = Blog(title="How Does Postnatal Depression Affect Us?", text="Being a new parent can be a somewhat daunting experience. Our hormones, the after effects of giving birth, of supporting our loved one in giving birth, and having a new little one to care for, can all lead to a rollercoaster of emotions.", creator=ryan)

    celine_blog = Blog(title="Understanding The Difference Between Nervousness and Anxiety", text="Nervousness is a human emotion that everyone experiences from time to time. Anxiety can be a diagnosable medical condition.", creator=celine)

    charlotte_blog = Blog(title="Mental Health Recovery Is Never Linear", text="When things go awry, we like to know what to do and how to do it, so that it can be sorted out, it is a totally natural response. With some illnesses, the treatment is simple and we are able to move on. Unfortunately, mental ill health is not so straightforward.", creator=charlotte)

    jason_blog = Blog(title="The Mental Health Benefits of Having a Daily Routine", text="It can sound counter-intuitive but developing a daily routine can help us to feel more in control of everything.", creator=jason)

    ryan_blog = Blog(title="Why the Words We Use Matter & Mental Health", text="When it comes to mental health and mental illness, language can be a very tricky landscape to navigate. ", creator=ryan)

    jade_blog = Blog(title="365 Days of Self Care, My Journal", text="Lists of ideas and tips", creator=jade)

    comment1 = Comment(content='I love this blog!!', blog=buse_blog)
    comment2 = Comment(content='I love this blog too, great content here!', blog=mary_blog)
    comment3 = Comment(content='Great article, I can totally relate.', blog=jason_blog)
    comment4 = Comment(content='Brilliant article ladies.', blog=paul_blog)
    comment5 = Comment(content='Such relevant advice..', blog=charlotte_blog)
    comment6 = Comment(content='Wow, excellent post surrounding anxiety', blog=celine_blog)
    comment7 = Comment(content='Can someone do a followup post on this? Love it.', blog=ryan_blog)
    comment8 = Comment(content='This is my favorite article so far.', blog=jason_blog)

    db.session.add(buse_blog)
    db.session.add(mary_blog)
    db.session.add(charlotte_blog)
    db.session.add(jason_blog)
    db.session.add(jade_blog)
    db.session.add(celine_blog)
    db.session.add(ryan_blog)
    db.session.add(paul_blog)
    db.session.add(chris_blog)
    db.session.add(phoebe_blog)
    db.session.add(jade_blog)
    db.session.add(ryan_blog)

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.add(comment5)
    db.session.add(comment6)
    db.session.add(comment7)
    db.session.add(comment8)

    db.session.commit()
