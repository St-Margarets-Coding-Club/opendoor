import os
from dotenv import load_dotenv
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from bson.json_util import dumps

#loads the .env file information
load_dotenv()

#for more info check the database folder
CLUSTER_URL = os.getenv("CLUSTER_URL")

uri = CLUSTER_URL

client = MongoClient(uri, server_api=ServerApi('1'))

try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

db = client['animalsdb']

col = db['animals']

cursor = col.find({})

#Turns the json content into a list
list_of_documents = list(cursor)

#Chooses all profiles with image links provided
list = [item for item in list_of_documents
        if item['image'] != 'temp']

