from app import app
from controllers import wellnest

app.register_blueprint(wellnest.api, url_prefix='/api')
