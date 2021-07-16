let goConf = 0
function openGo() {
    let userText = document.querySelector('input#userText')
    let usern = userText.value
    let options = [`Você logou como ${usern}`, 'Iniciar Sistema', 'Ativar o Artos', 'Mostrar Botão de Segurança']

if (goConf == 0) {
        let removeBox = document.getElementById('cred')
        removeBox.hidden = true

        var ckd = 0
        var container = document.getElementById('container')
    for (let baloon in options) {
        let newNot = document.createElement('div')
        newNot.setAttribute('class', 'bloco')   
        newNot.setAttribute('id', options[baloon])

        newNot.innerHTML =
        `<span class="material-icons"> batch_prediction </span>
        <br/> ${options[baloon]}`

        container.appendChild(newNot)
    }

    let newBut = document.getElementById('Mostrar Botão de Segurança')
    newBut.addEventListener('click', addBut)

    function addBut() {
        if (ckd == 0) {
            
            options.push('Painel de Segurança do Artos')
            let sfBut = document.createElement('div')
            sfBut.setAttribute('class', 'bloco')

            sfBut.innerHTML =
            `<span class="material-icons"> local_police </span>
            <br/> ${options[4]}`

            container.appendChild(sfBut)
            ckd++

            newBut.innerHTML = `<span class="material-icons"> batch_prediction </span>
            <br/> Esconder Botão de Segurança`

        } else {
            container.removeChild(container.childNodes[4])
            newBut.innerHTML = `<span class="material-icons"> batch_prediction </span>
            <br/> Mostrar Botão de Segurança`
            ckd--
        }
    }
} 
    
}