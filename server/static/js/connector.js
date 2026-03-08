// Main function
function fetchData() {
    //This gets the animal portfolio
    fetch('/get_data')
        .then(response => {

            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }

            return response.json();
        })
        .then(data => {

            //This is the functions that would be called if data is loaded succesfully
            displayName(data);
            displayGender(data);
            displaylink(data);
            displayOrganization(data);
            displayType(data);
            displayImage(data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}


//Use the functions where you want to display animals identifications(name, link to it, etc...)

function displayName(items) {
    //Displays animals name
    const element = document.getElementById('data-name');
    element.textContent = items.name;
}

function displayGender(items) {
    //displays animals gender
    const element = document.getElementById('data-gender');
    element.textContent = items.gender;
}
function displaylink(items) {
    //Displays animals access link 
    const listItem = document.getElementById('adoptLink');

    listItem.href = items.link;
    listItem.target = '_blank'

    console.log(items);

};
function displayOrganization(items) {
    //Displays organizations name where the animal is located at
    const element = document.getElementById('data-organization');
    element.textContent = items.organization;
}
function displayType(items) {
    //Displays animals type
    const element = document.getElementById('data-type');
    element.textContent = items.type;
}

function displayImage(items) {
    //Displays the image
    const cont = document.getElementById("imageHolder");
    cont.innerHTML = ""
    const petImage = document.createElement('img');
    petImage.src = items.image;
    petImage.alt = "Pet image was supposed to be here:(";
    petImage.width = 350;
    petImage.height = 350;
    petImage.style.borderRadius = "35px";
    petImage.loading = "lazy";

    cont.appendChild(petImage);
}

function reloadPage() {
    location.reload();
}
