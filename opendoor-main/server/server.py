import json
from flask import Flask, render_template, jsonify
import random
import data
from bson import json_util

#Sooo, this entire code sends out and recieves data, loads index.html

app = Flask(__name__)


#Read data.py for better understanding, this code gets a random animal data from the list
def animals():
    animals = data.list
    animal = random.choice(animals)
    return animal


#uploads index.html
@app.route("/")
def home():
    return render_template("index.html")

#sends out the data when js function was called
@app.route('/get_data')
def get_data():

    data = animals()

    return json.loads(json_util.dumps(data))


if __name__ == "__main__":
    app.run(debug=True)





