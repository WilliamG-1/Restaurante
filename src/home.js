
function generateHomePage(){
    const mainContent = document.createElement('div');
    mainContent.setAttribute("id", "aboutContent");

    
    const aboutSection = document.createElement('div');
    aboutSection.classList.add("restaurantDescription");
    aboutSection.textContent = `Creado desde el corazon de la Gomita, nuestro Restaurante se compromete a brindarle la comida de alta calidad y a precio economico!`;

    const restaurantHours = document.createElement('div');
    restaurantHours.classList.add("restaurantHours");

  
    const hoursHeader = document.createElement('h2');
    hoursHeader.textContent = "Hours";

    const hoursList = document.createElement('ul');
    const schedule = {
        "Monday": "9:00AM - 6:00PM",
        "Tuesday": "9:00AM - 6:00PM",
        "Wednesday": "9:00AM - 6:00PM",
        "Thursday": "9:00AM - 6:00PM",
        "Friday": "9:00AM - 6:00PM",
        "Saturday": "9:00AM - 6:00PM",
        "Sunday": "10:00AM - 5:00PM"
    }
    for ( let day in schedule){
        const entry = document.createElement('li');
        entry.textContent = `${day} ${schedule[day]}`;
        hoursList.appendChild(entry);
    }
    restaurantHours.appendChild(hoursHeader);
    restaurantHours.appendChild(hoursList);

    mainContent.appendChild(aboutSection);
    mainContent.appendChild(restaurantHours);

    return mainContent;
}

export default generateHomePage