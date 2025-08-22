import './heading.scss';

class Heading{
    render(pageName){
        const h1 = document.createElement('h1');
        h1.innerHTML = "Webpack is awesome. This is '" + pageName + "'";
        
        const body = document.querySelector('body');
        body.appendChild(h1);
    }
}

export default Heading;