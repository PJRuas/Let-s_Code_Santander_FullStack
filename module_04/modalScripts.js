class Button { //cria uma classe para gerar um botão genérico que recebe um elemento DOM e uma função "onclick"
    constructor(domElementId, onClickFn){
        this._domElement = document.querySelector(`button[id=${domElementId}]`) //seleciona o elemento DOM relativo ao botão
        this._domElement.onclick = onClickFn //adiciona a função passada para o botão
    }
}

const userDB = new Map() //simula uma database simples

const insertUser = {  //cria um objeto com as funções de tratamento para 'falha' e 'sucesso'. Essas funções são invocadas ao fechar o modal.
        fail: () => {
            console.log('User has cancelled') //retorna uma mensagem de falha
        },
        success: function() {
            let userName = `${document.querySelector('.modal form input[placeholder="name"]').value} ${document.querySelector('.modal form input[placeholder="surname"]').value}`
            let userEmail = document.querySelector('.modal form input[placeholder="email"]').value
            userDB.set(userName, userEmail)  //adiciona o usuario a database simples
        }
    }

const newUserInputs = {  //um objeto contendo os pares que formam os inputs do modal. Eles são no formato "placeholder":"type".
            name: {type :'text', required: true},
            surname: {type:'text', required: false},
            email: {type:'email', required: true}
}

const myModal = (function(){  //módulo do modal (uma função factory que é iniciada automaticamente) 
    const _CLASS_OPEN = "--is-open" //essa constante serve para que seja possível adicionar/remover um atributo "class" da <div> modal
    const _modal = document.querySelector('.modal') //seleciona na DOM da página o elemento da classe "modal" e atribui a uma variável
    const _form = document.querySelector('.modal form') //seleciona na DOM o elemento do tipo "form" localizado diretamente dentro do "modal"
    const _submitButton = document.querySelector('.modal form button[type="submit"]')
    const _cancelButton = document.querySelector('.modal form button[type="button"]')
 

    let _successFn; //uma variável indefinida que depois recebe a função "success" definida na const successOrFailure
    let _failFn; //uma variável indefinida que depois recebe a função "fail" definida na const successOrFailure
    let _inputs = []; //uma variável que depois recebe um array contendo os inputs do modal


    function modalHandler(object){
        _submitButton.innerText = (object.submitText ? object.submitText : 'Ok') //define o texto que aparece nos botões do modal
        _cancelButton.innerText = (object.cancelText ? object.cancelText : 'Cancel')
        if(object.type == 'getInfo'){
            showItens([_submitButton,_cancelButton])
            createInputFields(object.fields) //cria os inputs dentro do modal
            _inputs = document.querySelectorAll('.modal form ul li input') //pega na DOM uma lista de inputs pertencentes ao modal e atribui a uma variável
            if(object.settings.fail){ //testa se foi passado o atributo "fail" na const successOrFailure e, caso sim, o atribui a uma variável
                _failFn = object.settings.fail
            }
    
            if(object.settings.success){ //testa se foi passado o atributo "success" na const successOrFailure e, caso sim, o atribui a uma variável
                _successFn = object.settings.success
            }
    
            _form.onsubmit = function(event){ 
                event.preventDefault() //impede que a página seja recarregada ao enviar o formulário (clicar em OK no modal)
                for(input of _inputs){ //aplica a função "success" (declarada na const successOrFailure) para cada um dos inputs do modal
                    _successFn(input)
                }
                close() //esconde o modal
                _resetForm() //reseta o formulário do modal
            }
        }
        else if(object.type == 'showInfo'){
            hideItens([_cancelButton])
            createInfoFields(object.fields)
            _form.onsubmit = function(event){
                event.preventDefault() //impede que a página seja recarregada ao enviar o formulário (clicar em OK no modal)
                close() //esconde o modal
                _resetForm() //reseta o formulário do modal
            }
        }       
    }


    function hideItens(itens){ //esconde itens da DOM
        for (iten of itens){
            iten.classList.add('--is-hidden')
        }
    }
    function showItens(itens){ //mostra itens da DOM
        for (iten of itens ){
            if(iten.classList.contains('--is-hidden')){
                iten.classList.remove('--is-hidden')
            }
        }
    }



    function createInfoFields(object){
        const _ul = document.createElement('ul') //cria uma lista não ordenada para ser adicionada ao modal
        for(prop of object){
            let li = document.createElement('li') // 1- aqui cria um item da lista vazio
            let newInfoField = document.createElement('span') // 2- aqui cria um span indefinido
            newInfoField.textContent = prop // 3- aqui define o texto do span como sendo o valor passado na função
            li.appendChild(newInfoField) // 4- coloca o span criado dentro do item de lista vazio
            _ul.appendChild(li) // 5- adiciona o item de lista, agora contendo o span, dentro da "ul" 
        }
        _form.prepend(_ul) // 6- adiciona a lista ao modal
    }


    function createInputFields(object){ //recebe um objeto e, para cada par do objeto, cria um item de lista contendo um input e o adiciona à "ul" do modal
        const _ul = document.createElement('ul') //cria uma lista não ordenada para ser adicionada ao modal
        for(prop in object){
            let li = document.createElement('li') // 1- aqui cria um item da lista vazio
            let newInputField = document.createElement('input') // 2- aqui cria um input indefinido
            newInputField.placeholder = prop // 3- aqui define o placeholder do input como sendo a chave do par no objeto
            newInputField.type = object[prop].type // 4- aqui define o type do input como sendo o valor do par no objeto
            newInputField.required = object[prop].required  // 5- define o input como requerido
            li.appendChild(newInputField) // 6- coloca o input criado dentro do item de lista vazio
            _ul.appendChild(li) // 7- adiciona o item de lista, agora contendo o input, dentro da "ul"
        }
        _form.prepend(_ul) // 6- adiciona a lista ao modal
    }


    function clearModal(){ //remove todos os itens do modal, para evitar duplicidade quando chamar "open modal" novamente
        let itensToBeDeleted = _form.children //pega todos os itens dentro do modal
        for (iten of itensToBeDeleted){
            if(!iten.classList.contains ('fixed')){ //verifica se não é um iten fixo
                iten.remove()
            }
        }
    }


    function toggleOpenButton(){ //verifica se o modal está aberto ou fechado para passar esta informação ao button "open modal"
        return _modal.classList.contains(_CLASS_OPEN)
    }


    function modalOpener(object){ //junta as funções "open" e "toggleOpenButton" para serem passadas juntas ao botão
        if(!toggleOpenButton()){ //verifica se o modal está fechado. Se sim, abre ele
            open(object)
        }
        else { } //se o modal estiver aberto, bloqueia o botão
    }


    function _resetForm(){ //reseta o "form" do modal
        _form.reset()
    }


    function cancel(){ //executa a função declarada antes para caso de falha e fecha o modal
        if(_failFn){_failFn()}
        close()
    }


    function close(){ //remove a classe _CLASS_OPEN do modal, fazendo com que o CSS esconda ele
        _modal.classList.remove(_CLASS_OPEN)
        clearModal()
        // removeInputFields() //remove os inputs criados, para que na próxima chamada do modal não fiquem duplicados
    }


    function open(object){
        modalHandler(object) //transfere o tratamento do moda para a função específica
        _modal.classList.add(_CLASS_OPEN) //adiciona a classe _CLASS_OPEN ao modal, fazendo com que o CSS mostre ele
    }

    return{ //faz com que as funções "cancel", "close", "open" e "toggleOpenButton" declaradas dentro do módulo possam ser usadas fora dele
        cancel,
        close,
        modalOpener,
        toggleOpenButton
    }
})()

const buttonSignUp = new Button('sign-up', ()=>{myModal.modalOpener({type:'getInfo',settings: insertUser, fields: newUserInputs})})
const buttonList = new Button('list-users', ()=>{myModal.modalOpener({type: 'showInfo', fields: userDB, submitText: 'Back'})})