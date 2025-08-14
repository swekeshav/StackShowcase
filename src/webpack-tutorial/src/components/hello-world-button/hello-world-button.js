import './hello-world-button.scss';

class HelloWorldButton{
     render() {
         const button = document.createElement('button');
         button.innerHTML = 'Hello World';
         button.classList.add('hello-world-button');

         const body = document.querySelector('body');
         button.onclick = function() {
             const p = document.createElement('p');
             p.classList.add('hello-world-text');
             p.innerHTML = 'Hello World';
             body.appendChild(p);
         };
         body.appendChild(button);
     }
}

export default HelloWorldButton;