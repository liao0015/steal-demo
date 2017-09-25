import {h, render} from 'preact';
import Header from './header';

//Get references to the elements in demo.html
const container = document.getElementById('container');
const titleInput = document.getElementById('title');

//Use this to render our demo component
function renderComponent(){
    render(<Header title={titleInput.value} />, container, container.lastChild);
}

//Immediately render the component
renderComponent();

//Listen for the input to change so we re-render the component
titleInput.addEventListener('input', renderComponent);