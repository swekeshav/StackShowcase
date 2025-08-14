import Kiwi from './kiwi.jpg';
import altText from './altText.txt';

function addImage(){
    var img = document.createElement('img');
    img.alt = altText;
    img.width = 300;
    img.src = Kiwi;
    img.style.display = 'block';
    img.style.margin = '20px 0px';
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;
