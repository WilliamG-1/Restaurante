import './style.css';
import generateHomePage from './home';
const homeBtn = document.querySelector('#home');
const meneuBtn = document.querySelector('#menu');
const contactBtn = document.querySelector('#contact');
// const buttons = document.querySelectorAll('.tabButtons'); // Node list

homeBtn.addEventListener('click', ()=>{
    resetChildren(content);
    content.appendChild(generateHomePage());
})

const content = document.querySelector('#content');
content.appendChild(generateAboutPage());

function resetChildren(node){
    while (node.hasChildNodes()){
        node.removeChild(node.lastChild);
    }
}