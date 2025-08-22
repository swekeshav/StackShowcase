import Heading from "./components/heading/heading.js"; 
import HelloWorldButton from "./components/hello-world-button/hello-world-button.js"; 
import React from "react";

const heading = new Heading();
heading.render('Hello World');

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if(process.env.NODE_ENV === 'development') {
    console.log('Development mode is enabled');
} else if(process.env.NODE_ENV === 'production') {
    console.log('Production mode is enabled');
}