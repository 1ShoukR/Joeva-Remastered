from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///book.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     username = db.Column(db.String(120), unique=True, nullable=False)
#     password = db.Column(db.String(120), nullable=True)
#     first_name = db.Column(db.String(120), nullable=False)
#     last_name = db.Column(db.String(120), nullable=False)
#     email = db.Column(db.string(120), nullable=False)
#     created_at = db.Column(db.DateTime, default=datetime.utcnow)
#     updated_at = db.Column(db.DateTime, default=datetime.utcnow)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=True)
    password = db.Column(db.String(120), nullable=True)
    first_name = db.Column(db.String(120), nullable=False)
    last_name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)



class ComputerProducts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    price = db.Column(db.String(120), nullable=False)
    description = db.Column(db.String(120), nullable=False)
    reviews = db.Column(db.String(120), nullable=False)
    image = db.Column(db.Text, nullable=False)

class BoujieeClothes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    price = db.Column(db.String(120), nullable=False)
    description = db.Column(db.String(120), nullable=False)
    reviews = db.Column(db.String(120), nullable=False)
    image = db.Column(db.Text, nullable=False)

class BabyProducts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    price = db.Column(db.String(120), nullable=False)
    description = db.Column(db.String(120), nullable=False)
    reviews = db.Column(db.String(120), nullable=False)
    image = db.Column(db.Text, nullable=False)

class FreeJunks(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    price = db.Column(db.String(120), nullable=False)
    description = db.Column(db.String(120), nullable=False)
    reviews = db.Column(db.String(120), nullable=False)
    image = db.Column(db.Text, nullable=False)

class Orders(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False)
    computer_product_id = db.Column(db.Integer, nullable=True)
    Boujiee_clothes_id = db.Column(db.Integer, nullable=True)
    order_summary = db.Column(db.Text, nullable=True)
    carrier_service = db.Column(db.String(120), nullable=False)
    tracking_number = db.Column(db.Text, nullable=False)
    delivery_date = db.Column(db.String(120), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)