import Heading from "./components/heading/heading.js"; 
import HelloWorldButton from "./components/hello-world-button/hello-world-button.js"; 
import _ from 'lodash';

const heading = new Heading();
heading.render(_.upperFirst('hello world'));

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if(process.env.NODE_ENV === 'development') {
    console.log('Development mode is enabled');
} else if(process.env.NODE_ENV === 'production') {
    console.log('Production mode is enabled');
}