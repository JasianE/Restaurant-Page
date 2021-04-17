function createInitialPage(){
    //Obtain reference to container
    const container = document.getElementById('content')
    
    //Create elements
    let headLine = document.createElement('h1')
    let image = document.createElement('img')
    let copy = document.createElement('p')

    //Create Text Nodes and Src
    let headLineText = document.createTextNode('Los Pollos Hermanos')
    image.src = "b3b.gif"
    let copyText = document.createTextNode('At Los Pollos Hermanos, I am not in danger, I am the danger! (Jk Gus was the danger)')

    //Append
    headLine.appendChild(headLineText)
    copy.appendChild(copyText)
    container.appendChild(headLine)
    container.appendChild(image)
    container.appendChild(copy)
}
export default createInitialPage;