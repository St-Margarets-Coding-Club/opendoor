
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
        const listElement = document.getElementById('data-name');
        listElement.innerHTML = ''; 
        const listItem = document.createElement('p');
        listItem.textContent = items.name;
        listElement.appendChild(listItem);


    };

        function displayGender(items) {
        //displays animals gender
        const listElement = document.getElementById('data-gender');
        listElement.innerHTML = ''; 
        const listItem = document.createElement('p');
        listItem.textContent = items.gender;
        listElement.appendChild(listItem);


    };
        function displaylink(items) {
        //Displays animals access link
        const listElement = document.getElementById('data-link');
        listElement.innerHTML = ''; 
        const listItem = document.createElement('a');
        listItem.href = items.link;
        listItem.textContent = "ADOPT";
        listItem.target = '_blank'
        listElement.appendChild(listItem);
        console.log(items);

    };
        function displayOrganization(items) {
        //Displays organizations name where the animal is located at
        const listElement = document.getElementById('data-organization');
        listElement.innerHTML = ''; 
        const listItem = document.createElement('p');
        listItem.textContent = items.organization;
        listElement.appendChild(listItem);
        console.log(items);

    };
        function displayType(items) {
        //Displays animals type
        const listElement = document.getElementById('data-type');
        listElement.innerHTML = ''; 
        const listItem = document.createElement('p');
        listItem.textContent = items.type;
        listElement.appendChild(listItem);
        console.log(items);

    };

    function displayImage(items){
        //Displays the image
        const cont = document.getElementById("imageHolder");
        cont.innerHTML = ""
        const petImage = document.createElement('img');
        petImage.src = items.image;
        petImage.alt = "Pet image was supposed to be here:(";
        petImage.width = 400;

        petImage.length = 400;
        petImage.style.borderRadius = "40px";
        petImage.loading = "lazy";
        
        cont.appendChild(petImage);


    }

