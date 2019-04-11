from lib.secure_route import secure_route
from flask import Blueprint, request, jsonify, g
from models.blog import Blog, BlogSchema
blog_schema = BlogSchema()
# comment_schema = CommentSchema()

api = Blueprint('wellnest', __name__)

@api.route('/latest_blogs', methods=['GET'])
def latest_blogs():
    blogs = Blog.query.all()
    # test_data.text = 'hello'
    # test_data.title = 'world'
    return blog_schema.jsonify(blogs, many=True), 200

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

# @api.route('/wellnest/<int:blog_id>/comments', methods=['POST'])
# @secure_route
# def comment_create(blog_id):
#     data = request.get_json()
#     blog = Blog.query.get(blog_id)
#     comment, errors = comment_schema.load(data)
#     if errors:
#         return jsonify(errors), 422
#     comment.blog = blog
#     comment.save()
#     return comment_schema.jsonify(comment)
#
# @api.route('/wellnest/<int:blog_id>/comments/<int:comment_id>', methods=['DELETE'])
# @secure_route
# def comment_delete(**kwargs):
#     comment = Comment.query.get(kwargs['comment_id'])
#     comment.remove()
#     return '', 204
