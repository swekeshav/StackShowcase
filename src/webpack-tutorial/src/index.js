import helloWorld from "./hello-world";
import HelloWorldButton from "./components/hello-world-button/hello-world-button.js";  
import addImage from "./add-image";

helloWorld();
addImage();

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();