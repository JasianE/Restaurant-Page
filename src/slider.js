import createContact from "./contact"
import createMenu from "./menu"
import createInitialPage from "./initial-page-load"


function createSlider(){
    const container = document.getElementById('content')

    function MenuHelper(){
        container.innerHTML = ''
        createSlider()
        createMenu()
    }
    function ContactHelper(){
        container.innerHTML = ''
        createSlider()
        createContact()
    }
    function initialPageHelper(){
        container.innerHTML = ''
        createInitialPage()
    }

    const MenuButton = document.createElement('button')
    const ContactButton = document.createElement('button')
    const initialPageButton = document.createElement('button')

    const MenuButtonText = document.createTextNode('Menu')
    const ContactButtonText = document.createTextNode('Contact')
    const initialPageButtonText = document.createTextNode('Home')

    MenuButton.addEventListener('click', MenuHelper)
    ContactButton.addEventListener('click', ContactHelper)
    initialPageButton.addEventListener('click', initialPageHelper)

    MenuButton.appendChild(MenuButtonText)
    ContactButton.appendChild(ContactButtonText)
    initialPageButtonText.appendChild(initialPageButtonText)

    container.appendChild(MenuButton)
    container.appendChild(ContactButton)
    container.appendChild(initialPageButton)
}
export default createSlider;

