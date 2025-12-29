import './hello-world-button.scss';

class HelloWorldButton{
    buttonCssClass = 'hello-world-button'
     render() {
         const button = document.createElement('button');
         button.innerHTML = 'Hello World';
         button.classList.add(this.buttonCssClass);

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