import helloWorld from "./hello-world";
import HelloWorldButton from "./components/hello-world-button/hello-world-button.js"; 
import Heading from "./components/heading/heading.js"; 
import addImage from "./add-image";

helloWorld();
addImage();

const heading = new Heading();
heading.render();
const heading2 = new Heading();
heading2.render();

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();