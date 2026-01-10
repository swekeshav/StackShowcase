import './navigation-bar.scss'

class NavigationBar {
    render(navigationItems) {
        const liItems = navigationItems.map(item => {
            return `<li><a href="${item.url}">${item.title}</a></li>`
        })

        const ulElement = document.createElement('ul')
        ulElement.innerHTML = liItems.join('')
        ulElement.classList.add('navigation-bar')
        document.querySelector('body').appendChild(ulElement)
    }
}

export default NavigationBar