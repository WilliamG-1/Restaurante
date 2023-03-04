import './style.css';
import generateAboutPage from './menu';

const main = document.querySelector('#mainContent');
main.appendChild(generateAboutPage());
