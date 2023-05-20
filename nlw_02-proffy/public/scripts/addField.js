//Procurar o botão
document.querySelector("#add-time").addEventListener('click', cloneField)
//Quando clicar no botão

//Executar uma ação
function cloneField() {
     //Duplicar os campos. Que campos ?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //Antes de clonar na pagina, limpar os campos 
    const fields = newFieldContainer.querySelectorAll('input')

    //Para cada campo, limpar
    fields.forEach(function(field) {
        // pegar o field do momento e limpa ele
        field.value = ""

    })
   
    //Colocar na página: Onde ?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
   
}
   