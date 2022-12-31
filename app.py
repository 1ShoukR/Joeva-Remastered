from flask import Flask, redirect, url_for, render_template, request, session, g
from flask_cors import CORS, cross_origin
from datetime import datetime
from models import db, User, ComputerProducts, BoujieeClothes, BabyProducts, FreeJunks
import bcrypt



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
    "name": "The Blke Socks",
    "price": "$330.00",
    "description": """The only socks Blke would ever wear. These socks will make you feel like you are on Cloud9.""",
    "reviews": "10/10 (1 reviews)",
    "image": "https://bit.ly/3OLpQ7e",
}
    seed_user_account = BoujieeClothes(name=seed_data["name"], price=seed_data["price"], description=seed_data["description"], reviews=seed_data["reviews"], image=seed_data["image"])
    db.session.add(seed_user_account)
    db.session.commit()
    return "I have been added to database"

@app.route("/create-account-confirm", methods=["POST"])
def create_account_confirm():
    content = request.json
    print(content)
    user_to_create = User(username=content["username"], password=content["password"], first_name=content["firstName"], last_name=content["lastName"], email=content["email"])
    db.session.add(user_to_create)
    db.session.commit()
    response = {
        "username": user_to_create.username, 
        "password": user_to_create.password,
        "firstName": user_to_create.first_name,
        "lastName": user_to_create.last_name,
        "email": user_to_create.email
        }
    return response

@app.route("/get-pc-parts", methods=["GET"])
def get_pc_parts():
    pc_parts = ComputerProducts.query.all()
    response = []
    for pc_part in pc_parts:
        response.append({
            "id": pc_part.id,
            "name": pc_part.name,
            "price": pc_part.price,
            "description": pc_part.description,
            "reviews": pc_part.reviews,
            "image": pc_part.image
        })
    return response




@app.route("/get-boujiee-clothes", methods=["GET"])
def get_boujiee_clothes():
    clothes = BoujieeClothes.query.all()
    response = []
    for item in clothes:
        response.append({
            "id": item.id,
            "name": item.name,
            "price": item.price,
            "description": item.description,
            "reviews": item.reviews,
            "image": item.image
        })
    return response



@app.route("/")
def index():
    db.create_all()
    return "I am working"




if __name__ == "__main__":
    app.run(port=5000)