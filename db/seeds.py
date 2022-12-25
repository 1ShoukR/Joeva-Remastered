# This file should contain records you want created when you run flask db seed.
#
# Example:
# from yourapp.models import User


# initial_user = {
#     'username': 'superadmin'
# }
# if User.find_by_username(initial_user['username']) is None:
#     User(**initial_user).save()



from flask import Flask
from datetime import datetime
from models import User, db


app = Flask(__name__)
app.config['SECRET_KEY'] = '\x14B~^\x07\xe1\x197\xda\x18\xa6[[\x05\x03QVg\xce%\xb2<\x80\xa4\x00'
app.config['DEBUG'] = True

# Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:Rahmin12@localhost:3306/joeva_remastered'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['DEBUG'] = True
db.init_app(app)



# print(seed_data["username"])

seed_data = {
    "username": "guest",
    "password": "guest",
    "first_name": "guest",
    "last_name": "guest",
    "email": "guest@guest.com",
    "created_at": datetime.utcnow,
    "updated_at": datetime.utcnow
}


if User.query.filter_by(username=seed_data["username"]) is None:
    seed_user_account = User(username=seed_data["username"], password=seed_data["password"], first_name=seed_data["first_name"], last_name=seed_data["last_name"], email=seed_data["email"], created_at=datetime.utcnow, updated_at=datetime.utcnow)
    db.session.add(seed_user_account)
    db.session.commit()
    User(**seed_data).save()