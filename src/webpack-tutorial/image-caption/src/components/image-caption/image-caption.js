import './image-caption.scss'

class ImageCaption {

    render(captionText) {
        const captionElement = document.createElement('p')
        captionElement.textContent = captionText
        captionElement.classList.add('image-caption')
        const body = document.querySelector('body')
        body.appendChild(captionElement)
    }
}

export default ImageCaption