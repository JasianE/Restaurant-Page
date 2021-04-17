function createMenu(){
    const container = document.getElementById('content')
    
    const header = document.createElement('h1')
    const item1 = document.createElement('div')
    const item2 = document.createElement('div')
    const item3 = document.createElement('div')
    const item4 = document.createElement('div')

    const headerText = document.createTextNode('Our Dedicated Menu Made By Only The Best Cooks')
    const item1Text = document.createTextNode('Original Drum Stick')
    const item2Text = document.createTextNode('Blue Crystal Candy???')
    const item3Text = document.createTextNode('Bucket Of Raspberry Juice')
    const item4Text = document.createTextNode('MEth')

    header.appendChild(headerText)
    item1.appendChild(item1Text)
    item2.appendChild(item2Text)
    item3.appendChild(item3Text)
    item4.appendChild(item4Text)

    container.appendChild(header)
    container.appendChild(item1)
    container.appendChild(item2)
    container.appendChild(item3)
    container.appendChild(item4)
}
export default createMenu;