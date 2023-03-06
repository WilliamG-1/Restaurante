
function generateMenuPage(){
    const menuContent = document.createElement('div');
    menuContent.setAttribute('id', 'menuContent');

    const menuContentTitle = document.createElement('h1');
    menuContentTitle.textContent = "Menu"

    const contentDescription = document.createElement('h2');
    contentDescription.textContent = "Enjoy from a wide variety of options for you!";

    const menuItemsContainer = document.createElement('div');
    menuItemsContainer.setAttribute('id', 'menuItemContainer');

    let hamburger = MenuItem("Hamburger", "$7.00", "Hamburger.jpg");
    let burrito = MenuItem("Burrito", "$8.00", "Burrito.jpg");
    let pancake = MenuItem("Pancakes", "$5.00", "Pancakes.jpg");
    let friedShrimp = MenuItem("Fried Shrimp", "$12.00", "FriedShrimp.jpg");

    menuItemsContainer.appendChild(hamburger);
    menuItemsContainer.appendChild(burrito);
    menuItemsContainer.appendChild(pancake);
    menuItemsContainer.appendChild(friedShrimp);

    menuContent.appendChild(menuContentTitle);
    menuContent.appendChild(contentDescription);
    menuContent.appendChild(menuItemsContainer);

    return menuContent;
}

const MenuItem = (name, price, imgPath) => {

    let menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');
    let eTitle = document.createElement('h3');
    eTitle.textContent = name;

    let eImage = document.createElement('img');
    eImage.src = imgPath;

    let ePrice = document.createElement('h4');
    ePrice.textContent = price;

    menuItem.appendChild(eTitle);
    menuItem.appendChild(eImage);
    menuItem.appendChild(ePrice);

    return menuItem;
}

export default generateMenuPage