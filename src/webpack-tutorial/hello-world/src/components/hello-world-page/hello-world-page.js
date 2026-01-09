import Heading from "../heading/heading.js"
import HelloWorldButton from "../hello-world-button/hello-world-button.js"

class HelloWorldPage {
    render() {
        const heading = new Heading()
        heading.render('Hello World')

        const helloWorldButton = new HelloWorldButton()
        helloWorldButton.render()
    }
}

export default HelloWorldPage