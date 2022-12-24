from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///book.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=True)
    first_name = db.Column(db.String(120), nullable=False)
    last_name = db.Column(db.String, nullable=False)
    email = db.Column(db.string, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)


class ComputerProducts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    price = db.Column(db.String(120), nullable=False)
    description = db.Column(db.String)
    reviews = db.Column(db.String)