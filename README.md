# opendoor

opendoor is the largest repository of adoptable pets in Hong Kong and below is a roadmap on how we achieved this so anyone can replicate in any city.

## Roadmap

First we created a spreadsheet based on the Hong Kong Animal Adoption Database on 25/12/2025 Christmas Day which is the version we would be using for our database
Link to HKAAD: [hkaad.siuyeong.com](https://hkaad.siuyeong.com/)

The next step is loading the dataset with Pandas to prepare to upload to MongoDB Atlas
```python
# Load the dataset
import pandas as pd

df = pd.read_csv('animals.csv')
df.head()
```

After that, we converted the dataset into a Python dictionary
```python
list_of_dicts = df.to_dict(orient='records')
```
Finally, we uploaded the dataset onto MongoDB Atlas
```python
# Create a new collection
collection = db.create_collection("animals")
```

```python
collection.insert_many(list_of_dicts)
```

```python
collection.count_documents({})
```

```python
2071
```

For the complete code, please check out [convert.ipynb](https://github.com/St-Margarets-Coding-Club/opendoor/blob/main/data/convert.ipynb).
Next up, we have to create an images database for every document in MongoDB Atlas.