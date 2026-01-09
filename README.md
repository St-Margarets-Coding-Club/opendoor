# 😸 OpenDoor

The largest repository of adoptable pets in Hong Kong and scrollable on our website [OpenDoor](https://opendoorhk.com/). It is built with web development technologies and advance cloud technologies. You can scroll through pets profiles to see their name, type, gender, organization and image.

## ✨ Technologies

Web Development
- `HTML`
- `CSS`
- `JavaScript`
- `Python`

Cloud
- `MongoDB Atlas`
- `Cloudinary`
- `Vercel`

## 🚀 Features

- Sourced from major animal shelters in Hong Kong
- Simple and easy to use and familiar UI/UX
- Full transparency i.e. Open Source and Zero OAuth i.e. Privacy
- Mobile centric but adaptable on desktop or laptops
 
## 📍 The Initiative

Me and my team are determined to help animals find their homes and families with software and here's why.

One day my relatives came to visit my pet Pomeranian which is very old and physically disabled i.e. can't walk but he was having his moment with my relatives and enjoying his time, which I could tell from his big smile.

But then a thought popped up to my head. I realized most pets in animal shelters don't experience love and care like my pet Pomeranian and other pets do, which is a pretty sad thing.

Furthermore, animal shelters are not really technical and don't understand how software could really make the process of adoption more effective.

Hence, I decided to make our second project dedicated to build user-friendly software with an algorithmic approach to help them and not replace them but to motivate them to make adoptions more effective.

We decided to build a website where people could 'Doom Scroll' on it, but they're not procrastinating, they're finding a potential family member.

We are just an insignificant group of high schoolers who try to make a significant difference with code.

To better achieve this mission, we outlined two main goals we hope to accomplish.

## 🐾 The Goals
 1. Help as much animals as possible to find a place they call home and someone who loves them
 2. Open Source the code and document the whole process and help anyone to replicate it in their own city

## 🏁 The Process
 1. Convert raw data to a structured database
 We used a public Google Sheets database created by Siuyeong's [Hong Kong Animal Adoption Database](https://hkaad.siuyeong.com/) and converted it into a NoSQL Database hosted on MongoDB Atlas.

 Directory
 - `database`
 
 Files
 - `animals.csv` the spreadsheet

 - `convert.ipynb` converting .csv into MongoDB
 
 2. Adding the images
 You cannot have a proper profile without an image but the spreadsheet didn't provide it so we built it ourselves.

 Some of the process can be automated like creating fields, renaming them, getting links or even uploading images to the cloud but some cannot be done, like cleaning links or scraping images since each shelter's website works differently.

 Directory
 - `database`

 Files
 - `update.ipynb` creating an 'image' field in every document
 - `links.ipynb` grabbing the links to every pet
 - `scraping.ipynb` failed to get image source links
 - `images.ipynb` after cleaning the links and getting their image source links, upload them to Cloudinary
 - `test.ipynb` to test the securing code for the database

 - `links.txt` fetched links from MongoDB
 - `batch.txt` the batch you're dealing with each round of cleaning
 - `images.txt` the image source links from your current batch
 - `transformed.txt` the transformed image source links by Cloudinary

 Note that, you must do a lot of manual work in this process but some parts can still be automated e.g. uploading images to Cloudinary
 Also, the spreadsheet files contained a lot of tracker links or redirecting links so we chose to deal with the original links first and add them to our website, which is why theoretically we can keep updating the database but it's not our priority.

 3. Connecting the database to the frontend via backend
 We have some usable profiles now, next step is to bring it to life visually! And to do that, we need a backend.

 Our backend is built with Python and Flask. Main purpose serves as a bridge from the database to the frontend.

 Directory
 - `server`

 Files
 - `data.py` fetching usable profiles only
 - `server.py` communicate the data to the frontend

 Sub-Directory
 - `/static` 
 - `/css`
 - `/js`

 Files
 - `index.css` styling purposes
 - `connector.js` communicate the data to the frontend

 Sub-Directory
 - `/templates`

 Files
 - `index.html` skeleton for the frontend

 4. Deploy the prototype
 It is certainly not done yet and never will be. However we still deployed to the internet first for real edge cases testing.

 Directory
 - `server`

 Sub-Directory
 - `/templates` 

 Files
 - `index.html` skeleton for the frontend

 Our team is currently still working on the frontend...Stay Tuned...

## 🌐 Try out OpenDoor

It is in constant iteration

Prototype ➡️ [Try it here!](https://opendoor-pink.vercel.app/)

## 🎞️ Preview

It is a prototype demo ⬇️

https://github.com/user-attachments/assets/3333e898-6fbc-44c3-954d-5d40664d9158





