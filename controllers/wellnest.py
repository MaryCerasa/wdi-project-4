import os
import requests
from lib.secure_route import secure_route
from flask import Blueprint, request, jsonify, g
from models.blog import Blog, BlogSchema, Comment, CommentSchema

NHS_KEY = os.environ["NHS_NEWS_KEY"]

blog_schema = BlogSchema()
comment_schema = CommentSchema()

api = Blueprint('wellnest', __name__)

#get all blogs
@api.route('/latest_blogs', methods=['GET'])
def latest_blogs():
    blogs = Blog.query.all()
    return blog_schema.jsonify(blogs, many=True), 200

#  Get blog by user id
@api.route('/user_blogs/<int:creator>', methods=['GET'])
def user_blogs(creator):
    blogs = Blog.query.get(creator)
    return blog_schema.jsonify(blogs.creator.username), 200

@api.route('/wellnest', methods=['POST'])
@secure_route
def create():
    data = request.get_json()
    blog, errors = blog_schema.load(data)
    if errors:
        return jsonify(errors), 422
    blog.creator = g.current_user
    blog.save()
    return blog_schema.jsonify(blog)

@api.route('/wellnest/<int:blog_id>', methods=['GET'])
def show(blog_id):
    blog = Blog.query.get(blog_id)
    return blog_schema.jsonify(blog), 200

@api.route('/wellnest/<int:blog_id>', methods=['PUT'])
@secure_route
def update(blog_id):
    blog = Blog.query.get(blog_id)
    blog, errors = blog_schema.load(request.get_json(), instance=blog, partial=True)
    if errors:
        return jsonify(errors), 422

    if blog.creator != g.current_user:
        return jsonify({'message': 'Unauthorized'}), 401

    blog.save()
    return blog_schema.jsonify(blog)

@api.route('/wellnest/<int:blog_id>', methods=['DELETE'])
@secure_route
def delete(blog_id):
    blog = Blog.query.get(blog_id)
    if blog.creator != g.current_user:
        return jsonify({'message': 'Unauthorized'}), 401
    blog.remove()
    return '', 204

@api.route('/wellnest/<int:blog_id>/comments', methods=['POST'])
@secure_route
def comment_create(blog_id):
    data = request.get_json()
    blog = Blog.query.get(blog_id)
    comment, errors = comment_schema.load(data)
    if errors:
        return jsonify(errors), 422
    comment.blog = blog
    comment.save()
    return comment_schema.jsonify(comment)

@api.route('/wellnest/<int:blog_id>/comments/<int:comment_id>', methods=['DELETE'])
@secure_route
def comment_delete(**kwargs):
    comment = Comment.query.get(kwargs['comment_id'])
    comment.remove()
    return '', 204

@api.route('/latest-news', methods=['GET'])
def latest_news():
    url = "https://api.nhs.uk/news/?order=newest&page=1"
    resp = requests.get(url, headers={'subscription-key': NHS_KEY})
    return jsonify(resp.json())

@api.route('/news-article', methods=['POST'])
def news_article():
    data = request.get_json()
    url = data['url']
    resp = requests.get(url, headers={'subscription-key': NHS_KEY})
    return jsonify(resp.json())
