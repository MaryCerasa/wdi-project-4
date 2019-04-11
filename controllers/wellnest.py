from flask import Blueprint, jsonify
from models.blog import Blog, BlogSchema

blog_schema = BlogSchema()

api = Blueprint('wellnest', __name__)

@api.route('/latest_blogs', methods=['GET'])
def latest_blogs():
    blogs = Blog.query.all()
    # test_data.text = 'hello'
    # test_data.title = 'world'
    return blog_schema.jsonify(blogs, many=True), 200
