from flask import Flask, redirect, url_for, render_template, request, session, g
from flask_cors import CORS, cross_origin
from datetime import datetime
from models import db, User, ComputerProducts, BoujieeClothes, BabyProducts, FreeJunks



app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = '\xbb\xe7A\xe3\x9d=tg\xf6\x86).\xf8\xb1\x82L_99\x00\xc1\xc1\xf3\x95'
app.config['DEBUG'] = True
# Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:Rahmin12@localhost:3306/joeva_remastered'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['DEBUG'] = True

FLASK_DB_SEEDS_PATH = "seeds.py"

db.init_app(app)


@app.route("/seed-data", methods=["GET"])
def seed_data():
    seed_data = {
    "name": "G.SKILL Trident Z Royal Series 32GB (2 x 16GB)",
    "price": "$149.99",
    "description": "Incredibly fast and efficient RAM from G.SKILL",
    "reviews": "8.1/10 (55 reviews)",
    "image": "https://www.gskill.com/_upload/images/2106081105080.png",
}
    seed_user_account = ComputerProducts(name=seed_data["name"], price=seed_data["price"], description=seed_data["description"], reviews=seed_data["reviews"], image=seed_data["image"])
    db.session.add(seed_user_account)
    db.session.commit()
    return "I have been added to database"





@app.route("/")
def index():
    db.create_all()
    return "I am working"




if __name__ == "__main__":
    app.run(port=5000)