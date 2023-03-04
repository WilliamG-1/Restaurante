
function generateAboutPage(){
    const mainContent = document.createElement('div');
    mainContent.setAttribute("id", "mainContent");

    
    const aboutSection = document.createElement('div');
    aboutSection.classList.add("restaurantDescription");
    aboutSection.textContent = `modules by path ./node_modules/css-loader/dist/runtime/*.js 2.74 KiB
    ./node_modules/css-loader/dist/runtime/sourceMaps.js 505 bytes [built] [code generated]
    ./node_modules/css-loader/dist/runtime/api.js 2.25 KiB [built] [code generated]
modules by path ./src/ 2.77 KiB
  ./src/source.js 22 bytes [built] [code generated]
  ./src/style.css 1.11 KiB [built] [code generated]`;

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

export default generateAboutPage