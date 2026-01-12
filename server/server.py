import json
from flask import Flask, render_template
import random
import data
from bson import json_util
from random import shuffle

#Sooo, this entire code sends out and recieves data, loads index.html

app = Flask(__name__)


#Read data.py for better understanding, this code gets a random animal data from the list
def animals():
    animal_list = data.list[:]
    animal_list2 = data.list[:]
    shuffle(animal_list)
    
    if not animal_list:
        animal_list = animal_list2
        animal = random.choice(animal_list)
        animal_list.remove(animal)
    else:
        animal = random.choice(animal_list)
        animal_list.remove(animal)       
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






