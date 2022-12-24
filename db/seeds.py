# This file should contain records you want created when you run flask db seed.
#
# Example:
# from yourapp.models import User


# initial_user = {
#     'username': 'superadmin'
# }
# if User.find_by_username(initial_user['username']) is None:
#     User(**initial_user).save()



from flask import current_app
from datetime import datetime
from ..models import User



app_config = current_app.config


seed_data = {
    "username": "guest",
    "password": "guest",
    "first_name": "guest",
    "last_name": "guest",
    "email": "guest@guest.com",
    "created_at": datetime.utcnow,
    "updated_at": datetime.utcnow
}

print(seed_data["username"])

if User.query.filter_by(username=seed_data["username"]) is None:
    User(**seed_data).save()