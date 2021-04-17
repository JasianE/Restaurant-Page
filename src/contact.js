function createContact(){
    const container = document.getElementById('content')

    const contactHeader = document.createElement('h1')
    const body = document.createElement('p')

    const contactHeaderText = document.createTextNode('Contact Los Pollos Hermanos')
    const bodyText = document.createTextNode('If you have any, "Business" inquiries, bettern callslsf aual1!!')
    
    contactHeader.appendChild(contactHeaderText)
    bodyText.appendChild(bodyText)
    container.appendChild(contactHeaderText)
    container.appendChild(body)
}
export default createContact;