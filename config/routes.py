from app import app
from controllers import wellnest, auth

app.register_blueprint(wellnest.api, url_prefix='/api')
app.register_blueprint(auth.api, url_prefix='/api')
