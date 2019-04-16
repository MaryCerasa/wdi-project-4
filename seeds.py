from app import app, db
from models.blog import Blog, Comment, Profile
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

    buse_profile = Profile(creator=buse, user_id=buse.id)
    db.session.add(buse_profile)

    mary, errors = user_schema.load({
        'username': 'mary',
        'email': 'mary@email.com',
        'password': 'password',
        'password_confirmation': 'password'
    })
    mary_profile = Profile(creator=mary, user_id=mary.id)
    db.session.add(mary_profile)

    if errors:
        raise Exception(errors)

    db.session.add(mary)

    phoebe, errors = user_schema.load({
        'username': 'phoebe',
        'email': 'phoebe@email.com',
        'password': 'password',
        'password_confirmation': 'password'
    })
    phoebe_profile = Profile(creator=phoebe, user_id=phoebe.id)
    db.session.add(phoebe_profile)

    if errors:
        raise Exception(errors)

    db.session.add(phoebe)

    paul, errors = user_schema.load({
        'username': 'paul',
        'email': 'paul@email.com',
        'password': 'password',
        'password_confirmation': 'password'
    })
    paul_profile = Profile(creator=paul, user_id=paul.id)
    db.session.add(paul_profile)

    if errors:
        raise Exception(errors)

    db.session.add(paul)

    chris, errors = user_schema.load({
        'username': 'chris',
        'email': 'chris@email.com',
        'password': 'password',
        'password_confirmation': 'password'
    })
    chris_profile = Profile(creator=chris, user_id=chris.id)
    db.session.add(chris_profile)

    if errors:
        raise Exception(errors)

    db.session.add(chris)

    jade, errors = user_schema.load({
        'username': 'jade',
        'email': 'jade@email.com',
        'password': 'password',
        'password_confirmation': 'password'
    })
    jade_profile = Profile(creator=jade, user_id=jade.id)
    db.session.add(jade_profile)

    if errors:
        raise Exception(errors)

    db.session.add(jade)

    ryan, errors = user_schema.load({
        'username': 'ryan',
        'email': 'ryan@email.com',
        'password': 'password',
        'password_confirmation': 'password'
    })
    ryan_profile = Profile(creator=ryan, user_id=ryan.id)
    db.session.add(ryan_profile)

    if errors:
        raise Exception(errors)

    db.session.add(ryan)

    celine, errors = user_schema.load({
        'username': 'celine',
        'email': 'celine@email.com',
        'password': 'password',
        'password_confirmation': 'password'
    })
    celine_profile = Profile(creator=celine, user_id=celine.id)
    db.session.add(celine_profile)

    if errors:
        raise Exception(errors)

    db.session.add(celine)

    charlotte, errors = user_schema.load({
        'username': 'charlotte',
        'email': 'charlotte@email.com',
        'password': 'password',
        'password_confirmation': 'password'
    })
    charlotte_profile = Profile(creator=charlotte, user_id=charlotte.id)
    db.session.add(charlotte_profile)

    if errors:
        raise Exception(errors)

    db.session.add(charlotte)

    jason, errors = user_schema.load({
        'username': 'jason',
        'email': 'jasone@email.com',
        'password': 'password',
        'password_confirmation': 'password'
    })
    jason_profile = Profile(creator=jason, user_id=jason.id)
    db.session.add(jason_profile)

    if errors:
        raise Exception(errors)

    db.session.add(jason)

    fabio, errors = user_schema.load({
        'username': 'fabio',
        'email': 'fabio@email.com',
        'password': 'password',
        'password_confirmation': 'password'
    })
    fabio_profile = Profile(creator=fabio, user_id=fabio.id)
    db.session.add(fabio_profile)

    if errors:
        raise Exception(errors)

    db.session.add(fabio)

    cag, errors = user_schema.load({
        'username': 'cag',
        'email': 'cag@email.com',
        'password': 'password',
        'password_confirmation': 'password'
    })
    cag_profile = Profile(creator=cag, user_id=cag.id)
    db.session.add(cag_profile)

    if errors:
        raise Exception(errors)

    db.session.add(cag)

    samantha, errors = user_schema.load({
        'username': 'samantha',
        'email': 'samantha@email.com',
        'password': 'password',
        'password_confirmation': 'password'
    })
    samantha_profile = Profile(creator=samantha, user_id=samantha.id)
    db.session.add(samantha_profile)

    if errors:
        raise Exception(errors)

    db.session.add(samantha)

#pylint: disable=C0301
    buse_blog = Blog(title="Buse's Blog", text='Hi there, I am Buse', creator=buse)

    mary_blog = Blog(title="Mary's Blog", text="Hi I am Mary", creator=mary)

    mary_blog = Blog(title="What To Do If You’re Struggling To Sleep", text="Good sleep is important for our mental health, but what can you do if your mental illness is preventing you from getting enough? Here are some of my tips, advice and my bedtime routine.", creator=mary)

    mary_blog = Blog(title="Will Using Less Of My Phone Help My Mental Health?", text="When we think about safer internet usage, don’t forget to consider your own mental health and how safe and protected it is. We need to make sure that the amazing new technologies that are constantly springing up do not cause our mental health to suffer. Perhaps you could start by spending one hour less per day on your smartphone?", creator=mary)

    mary_blog = Blog(title="Self Confidence Tips: How To Bring Your Confidence To The Next Level", text="We’ve all heard the saying fake it until you make it and while a bit cheesy it does and can work, even with social anxiety. If you’re anxious, you often worry if it’s outwardly obvious to other people, so being able to appear more confident even when you’re not, can at least dissolve some of those worries and hopefully lessening your anxiety a bit. But, how do you appear more confident? Try these self confidence tips…", creator=mary)

    mary_blog = Blog(title="Ask Twice: How We  Can Better Support People Struggling", text="Ask Twice, is, as the name suggests all about asking people that age-old question ‘How are you’ more than once. The reason for this is that, more often than not, people asked this will just say ‘I’m Fine’ and then move on from it, even if they aren’t. The reason for this is because the person asking the question can often not be too interested in the deeper emotions a person is feeling but also that the person being asked this doesn’t really want to go into details about how they are.", creator=mary)

    phoebe_blog = Blog(title="11 Instagram Accounts That Never Fail To Give Me a Lift", text="One thing we love about the Internet is that it opens the door for conversation about mental health.", creator=phoebe)

    phoebe_blog = Blog(title="How I Learned to Address My Repressed Anger", text="Anger is something that needs to be addressed, it needs to be listened too. I have learned how to communicate and mention my discomforts before it reaches boiling level. Sometimes just accepting that we don’t like something, and expressing that, can prevent a whole outburst. Its important to remember that honestly, anger does not need to be negative, it can help us communicate to others how we are feeling. We have the option to express anger in a way that isn’t aggressive or harmful; we don’t need to be afraid of showing our emotions because we don’t have to give them the power of controlling us.", creator=phoebe)

    phoebe_blog = Blog(title="Living With A High Functioning Mental Illness", text="Everyday people across the world get up, get dressed and go about their daily lives, completely undetected to be struggling. From the outside they look as if everything is normal, however on the inside there is a battle going on. Whilst appearing normal to those around them, they are fighting a mental illness. Be it anxiety, depression, BPD, or anything else. They are living with high functioning mental illness. This might be a term you haven't heard before, it isn't one readily used. But it is very real for a lot of people. High functioning mental illness is the term that has been adopted to describe those living with a mental illness that is almost undetectable. It covers a broad spectrum; they might have a job, be studying, dress well, or even have the perfect family lifestyle. High functioning mental health is being able to go about most days as if there isn't a war going on in your head, or panic ricocheting through your body. High functioning mental illness, like any mental illness, is exhausting, and overwhelming and hard to deal with.", creator=phoebe)

    phoebe_blog = Blog(title="Tips For a Mentally Healthy 2019", text="Self-care is everywhere at the moment,if I hear one more thing about the importance of self-care…! I am excellent at telling people to take days out for self-care activities, but the reality is I am terrible at doing this for myself. I spend far too much time focusing on other things in my life. So my plan this year is to do one self-care activity every week. For me, this is having a coffee in one of my favourite cafes, getting my nails done, watching a girly movie. Will you join me in this? There are so many amazing ideas online if you need ideas for things to do. It doesn’t have to be expensive, just things we do for ourselves. And YES you do deserve to do this!", creator=phoebe)

    paul_blog = Blog(title="How Drinking Affects Your Mental Health", text="Problem drinking is closely associated with violence, trauma and poverty which are some of the most significant factors in harming mental health. Not only can alcohol act as an indirect pre-determinant of mental ill health, by causing violence that traumatises, for example, but the substance itself changes a person's brain chemistry and can directly cause depression and anxiety.", creator=paul)

    paul_blog = Blog(title="The Declining State of Student Mental Health in Universities", text="Recent statistics reveal the extent of the student mental health crisis in the UK. In 2015 to 16, over 15,000 first-year students in UK universities reported that they had a mental health problem, compared to approximately 3,000 in 2006. This increase in disclosure is mirrored by a 94% of higher education institutions reporting an increase in demand for their counselling services. Despite the surge in help-seeking behaviour, there is evidence to suggest that there are many more students who do not seek treatment for mental health problems.", creator=paul)

    paul_blog = Blog(title="Instagram: Love It or Loathe It?", text="Social media has been proven to negatively impact your health and mental well-being. Limit your time online to ensure you do not overuse the platform.", creator=paul)

    samantha_blog = Blog(title="9 No-Nonsense Self-Care Ideas", text="Set time for yourself each week.", creator=samantha)

    chris_blog = Blog(title="How To Be Mindful Of Your Digital Boundaries", text="Limit the social media content you access.", creator=chris)

    jade_blog = Blog(title="How To Start Openly Talking About Your Mental Health", text=" Deciding to be open about our mental health is a very personal decision. There is no right or wrong answer, and nobody can make the decision for us.", creator=jade)

    ryan_blog = Blog(title="How Does Postnatal Depression Affect Us?", text="Being a new parent can be a somewhat daunting experience. Our hormones, the after effects of giving birth, of supporting our loved one in giving birth, and having a new little one to care for, can all lead to a rollercoaster of emotions.", creator=ryan)

    celine_blog = Blog(title="Understanding The Difference Between Nervousness and Anxiety", text="Nervousness is a human emotion that everyone experiences from time to time. Anxiety can be a diagnosable medical condition.", creator=celine)

    charlotte_blog = Blog(title="Mental Health Recovery Is Never Linear", text="When things go awry, we like to know what to do and how to do it, so that it can be sorted out, it is a totally natural response. With some illnesses, the treatment is simple and we are able to move on. Unfortunately, mental ill health is not so straightforward.", creator=charlotte)

    jason_blog = Blog(title="The Mental Health Benefits of Having a Daily Routine", text="It can sound counter-intuitive but developing a daily routine can help us to feel more in control of everything.", creator=jason)

    cag_blog = Blog(title="Why the Words We Use Matter & Mental Health", text="When it comes to mental health and mental illness, language can be a very tricky landscape to navigate. ", creator=cag)

    fabio_blog = Blog(title="365 Days of Self Care, My Journal", text="Lists of ideas and tips", creator=fabio)

    comment1 = Comment(content='I love this blog!!', blog=buse_blog, creator=buse)
    comment2 = Comment(content='I love this blog too, great content here!', blog=mary_blog, creator=buse)
    comment3 = Comment(content='Great article, I can totally relate.', blog=jason_blog, creator=mary)
    comment4 = Comment(content='Brilliant article ladies.', blog=paul_blog, creator=buse)
    comment5 = Comment(content='Such relevant advice..', blog=charlotte_blog, creator=mary)
    comment6 = Comment(content='Wow, excellent post surrounding anxiety', blog=celine_blog, creator=buse)
    comment7 = Comment(content='Can someone do a followup post on this? Love it.', blog=ryan_blog, creator=mary)
    comment8 = Comment(content='This is my favorite article so far.', blog=jason_blog, creator=buse)

    db.session.add(buse_blog)
    db.session.add(mary_blog)
    db.session.add(mary_blog)
    db.session.add(mary_blog)
    db.session.add(mary_blog)
    db.session.add(mary_blog)
    db.session.add(charlotte_blog)
    db.session.add(jason_blog)
    db.session.add(jade_blog)
    db.session.add(celine_blog)
    db.session.add(ryan_blog)
    db.session.add(paul_blog)
    db.session.add(paul_blog)
    db.session.add(paul_blog)
    db.session.add(chris_blog)
    db.session.add(phoebe_blog)
    db.session.add(phoebe_blog)
    db.session.add(phoebe_blog)
    db.session.add(phoebe_blog)
    db.session.add(fabio_blog)
    db.session.add(cag_blog)
    db.session.add(samantha_blog)

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.add(comment5)
    db.session.add(comment6)
    db.session.add(comment7)
    db.session.add(comment8)

    db.session.commit()
