from flask import Flask, redirect, url_for, render_template, request, session, g
from flask_cors import CORS, cross_origin



app = Flask(__name__)
CORS(app)





@app.route("/")
def index():
    return "I am working"




if __name__ == "__main__":
    app.run(port=5000)