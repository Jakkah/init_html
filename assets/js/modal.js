function openModal(){
    console.log('je dois ouvrir le modal')

    const formTemplate = document.getElementById('form-template')
    const templateContent = formTemplate.content.cloneNode(true)

    document.body.appendChild(templateContent)
}


function closeModal(){
    console.log('Ferme cette putain de PopUp !')
    const modal = document.getElementsByClassName('outer-modal')[0]
    document.body.removeChild(modal)
    
}
