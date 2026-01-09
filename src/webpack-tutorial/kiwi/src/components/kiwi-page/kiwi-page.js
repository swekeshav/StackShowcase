import Heading from "../heading/heading.js"
import KiwiImage from "../kiwi-image/kiwi-image.js"

class KiwiPage {
    render() {
        const heading = new Heading()
        heading.render("Kiwi")

        const kiwiImage = new KiwiImage()
        kiwiImage.render()
    }
}

export default KiwiPage