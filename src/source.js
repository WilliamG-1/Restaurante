import './style.css';
import generateHomePage from './home';
import generateMenuPage from './menu';

import burrito from './assets/Burrito.jpg';
import shrimp from './assets/FriedShrimp.jpg';
import hamburger from './assets/Hamburger.jpg';
import pacakes from './assets/Pancakes.jpg';


const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const contactBtn = document.querySelector('#contact');
// const buttons = document.querySelectorAll('.tabButtons'); // Node list
const content = document.querySelector('.pageBody');

function resetChildren(node){
    while (node.hasChildNodes()){
        node.removeChild(node.lastChild);
    }
}

homeBtn.addEventListener('click', ()=>{
    resetChildren(content);
    content.appendChild(generateHomePage());
})
menuBtn.addEventListener('click', ()=>{
    resetChildren(content);
    content.appendChild(generateMenuPage());
});
contactBtn.addEventListener('click', ()=>{
    resetChildren(content);
})



content.appendChild(generateHomePage());
