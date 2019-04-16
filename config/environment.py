import os

db_uri = os.getenv('DATABASE_URL', 'postgres://localhost:5432/wellnest')
secret = os.getenv('SECRET', 'shh its a secret')
