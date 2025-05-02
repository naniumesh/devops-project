// JavaScript code for dynamic functionality

// Font size functionality
let fontSize = 16; // Initial font size in pixels

// Increase font size
document.getElementById('increase-font').addEventListener('click', function() {
    fontSize += 2; // Increase font size by 2 pixels
    document.body.style.fontSize = fontSize + 'px';
});

// Decrease font size
document.getElementById('decrease-font').addEventListener('click', function() {
    if (fontSize > 10) { // Ensure font size doesn't go below 10 pixels
        fontSize -= 2; // Decrease font size by 2 pixels
        document.body.style.fontSize = fontSize + 'px';
    }
});

// Reset font size to default
document.getElementById('reset-font').addEventListener('click', function() {
    fontSize = 16; // Reset font size to default (16 pixels)
    document.body.style.fontSize = '16px';
});





// 2nd and 3rd Division
 // Get the hamburger icon
 var navToggle = document.getElementById('nav-toggle');

 // Get the third division
 var division3 = document.getElementById('division3');

 // Add click event listener to the hamburger icon
 navToggle.addEventListener('click', function() {
     // Toggle the visibility of the third division
     division3.classList.toggle('active');
 });

 // Add resize event listener to the window object
 window.addEventListener('resize', function() {
     // If the viewport width is more than 600px
     if (window.innerWidth > 600) {
         // Remove the active class from the third division
         division3.classList.remove('active');
     }
 });

const people = [
    //{ name: "Ritik Singh", batch: "2015 - 2018", field: "INDIAN ARMY", image: "" },
    { name: "Nitesh Saini", batch: "2016 - 2019", field: "INDIAN AIR FORCE", image: "Achive_Images/Nitesh_kumar.jpg" },
    { name: "Sachin Vikram", batch: "2017 - 2020", field: "INDIAN ARMY", image: "Achive_Images/Sachin Vikram.jpg" },
    { name: "Tasbir Singh", batch: "2017 - 2020", field: "INDIAN ARMY", image: "Achive_Images/UO Tasbir Singh.png" },
    { name: "Lalit Gautam", batch: "2017 - 2020", field: "INDIAN AIR FORCE", image: "Achive_Images/Cadet Lalit Gautam.png" },
    { name: "Pratik Vijay Kukudhkar", batch: "2017 - 2020", field: "INDIAN AIR FORCE", image: "Achive_Images/SUO Pratik Vijay Kukudhkar.png" },
    //{ name: "Aditya Dhamal", batch: "2017 - 2020", field: "INDIAN ARMY", image: "" }
    { name: "Sahil", batch: "2018 - 2021", field: "INDIAN ARMY", image: "Achive_Images/sahil.jpeg" },
    { name: "Keelu Kailash", batch: "2018 - 2021", field: "INDIAN ARMY", image: "Achive_Images/Keelu Kailash.jpg" },
    { name: "Devendra Kumar Tripathi", batch: "2018 - 2021", field: "INDIAN ARMY", image: "Achive_Images/Devendra .jpg" },
    { name: "Prateek Jethanandani", batch: "2018 - 2021", field: "INDIAN ARMY", image: "Achive_Images/Prateek.jpeg" },
    { name: "Adithya Kumar Sharma", batch: "2018 - 2021", field: "INDIAN ARMY", image: "Achive_Images/aditya kumar sharma.jpg" },
    { name: "Abhishek Sharma", batch: "2018 - 2021", field: "INDIAN ARMY", image: "Achive_Images/Cadet Abhishek Sharma(18-21).jpg" },
    //{ name: "Ambrish Tripathi", batch: "2019 - 2022", field: "INDIAN NAVY", image: "" },
    { name: "Abhishek Kumar", batch: "2019 - 2022", field: "INDIAN ARMY", image: "Achive_Images/UO ABISHEK KUMAR.jpg" },
    { name: "Shubham Anand", batch: "2019 - 2022", field: "INDIAN AIR FORCE", image: "Achive_Images/anand.jpg" },
    { name: "Ashish Kumar", batch: "2019 - 2022", field: "INDIAN AIR FORCE", image: "Achive_Images/Ashish Kumar.jpg" },
    { name: "Omkar Nath", batch: "2019 - 2022", field: "INDIAN ARMY", image: "Achive_Images/CPL Omkar Nath.png" },
    { name: "Kirat Singh Bhalla", batch: "2019 - 2022", field: "INDIAN ARMY", image: "Achive_Images/Kirat Singh Bhalla.jpg" },
    { name: "Ankesh Tripathi", batch: "2019 - 2022", field: "INDIAN AIR FORCE", image: "Achive_Images/Ankesh Tripati.png" },
    { name: "Aman Chouhan", batch: "2020 - 2023", field: "INDIAN ARMY", image: "Achive_Images/AMAN KUMAR.jpg" },
    { name: "Harsh Raj", batch: "2020 - 2023", field: "INDIAN ARMY", image: "Achive_Images/Harsh Raj.jpg" },
    { name: "Suraj Singh", batch: "2020 - 2023", field: "INDIAN ARMY", image: "Achive_Images/suraj.jpg" },
    { name: "Ananya Sahu", batch: "2021 - 2024", field: "INDIAN NAVY", image: "Achive_Images/Ananya Sahu.png" },
    { name: "Aman Sharma", batch: "2021 - 2024", field: "INDIAN ARMY", image: "Achive_Images/Aman Sharma.png" },
    { name: "Arun Chaudhary", batch: "2022 - 2025", field: "INDIAN NAVY", image: "Achive_Images/Arun Chaudhary.jpg" }
];

function displayPersonDetails(person) {
    document.getElementById('personName').innerText = person.name;
    document.getElementById('personBatch').innerText = person.batch;
    document.getElementById('personField').innerText = person.field;
    document.getElementById('personImage').src = person.image;
    document.getElementById('personList').style.display = 'none';
    const detailBox = document.getElementById('personDetail');
    detailBox.style.display = 'flex';
    setTimeout(() => detailBox.classList.add('show'), 50);
}

function backToList() {
    const detailBox = document.getElementById('personDetail');
    detailBox.classList.remove('show');
    setTimeout(() => {
        detailBox.style.display = 'none';
        document.getElementById('personList').style.display = 'block';
        loadPeople();
    }, 500);
}

function createPersonCard(person) {
    const card = document.createElement('div');
    card.className = 'col-12 col-sm-6 col-md-4 col-lg-2 mb-4 person-card shadow fadeIn';
    card.onclick = () => displayPersonDetails(person);
    const img = document.createElement('img');
    img.src = person.image;
    img.classList.add('img-fluid');
    card.appendChild(img);
    const name = document.createElement('h3');
    name.innerText = person.name;
    card.appendChild(name);
    const batch = document.createElement('p');
    batch.innerText = "Batch: " + person.batch;
    card.appendChild(batch);
    const field = document.createElement('p');
    field.innerText = "Field: " + person.field;
    card.appendChild(field);
    return card;
}

function loadPeople() {
    const personListElement = document.getElementById('personCards');
    personListElement.innerHTML = '';
    people.forEach(person => {
        const card = createPersonCard(person);
        personListElement.appendChild(card);
    });
}

function filterPeople() {
    const field = document.getElementById('filterField').value;
    const filteredPeople = field ? people.filter(p => p.field === field) : people;
    const personListElement = document.getElementById('personCards');
    personListElement.innerHTML = '';
    filteredPeople.forEach(person => {
        const card = createPersonCard(person);
        personListElement.appendChild(card);
    });
}
loadPeople();



//Contact Modal
function showContact() {
    let modal = document.getElementById("modalOverlay");
    modal.style.display = "flex";
    setTimeout(() => {
        modal.classList.add("active");
    }, 10);
}

function closeContact(event) {
    let modal = document.getElementById("modalOverlay");
    if (event.target === modal || event.target.classList.contains("close-btn")) {
        modal.classList.remove("active");
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }
}