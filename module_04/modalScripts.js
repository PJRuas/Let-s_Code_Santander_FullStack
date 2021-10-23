const buttonOpenModal = document.querySelector('button[name="open-modal"]') //seleciona na DOM da página, o elemento "button" de "name = 'open-modal'" e atribui a uma variável

        const successOrFailure = {  //cria um objeto com as funções de tratamento para 'falha' e 'sucesso'. Essas funções são invocadas ao fechar o modal.
                fail: () => {
                    console.log('User has cancelled') //retorna uma mensagem de falha
                },
                success: input => {
                    console.log('User provided: ', input.value) //analisa um input e retorna uma string contendo o valor digitado no campo
                }
            }

        const modalInputs = {  //um objeto contendo os pares que formam os inputs do modal. Eles são no formato "placeholder":"type".
                    'name':'text',
                    'email':'email',
                    'age':'number'
                }

        buttonOpenModal.onclick = function(){  //pega o button declarado acima e adiciona a função quando clicado, iniciando um modal novo com os inputs passados acima.
            myModal.open(successOrFailure, modalInputs)
        }

        const myModal = (function(){  //módulo do modal (uma função factory que é iniciada automaticamente) 
            const _CLASS_OPEN = "--is-open" //essa constante serve para que seja possível adicionar/remover um atributo "class" da <div> modal
            const _modal = document.querySelector('.modal') //seleciona na DOM da página o elemento da classe "modal" e atribui a uma variável
            const _form = document.querySelector('.modal form') //seleciona na DOM o elemento do tipo "form" localizado diretamente dentro do "modal"
            const _ul = document.querySelector('.modal form ul') //seleciona na DOM o elemento do tipo "ul" localizado diretamente dentro do "form" dentro do "modal"

            let _successFn; //uma variável indefinida que depois recebe a função "success" definida na const successOrFailure
            let _failFn; //uma variável indefinida que depois recebe a função "fail" definida na const successOrFailure
            let _inputs = []; //uma variável que depois recebe um array contendo os inputs do modal

            function createInputFields(object){ //recebe um objeto e, para cada par do objeto, cria um item de lista contendo um input e o adiciona à "ul" do modal
                for(prop in object){
                    let li = document.createElement('li') // 1- aqui cria um item da lista vazio
                    let newInputField = document.createElement('input') // 2- aqui cria um input indefinido
                    newInputField.placeholder = prop // 3- aqui define o placeholder do input como sendo a chave do par no objeto
                    newInputField.type = object[prop] // 4- aqui define o type do input como sendo o valor do par no objeto
                    newInputField.required = true // 5- define o input como requerido
                    li.appendChild(newInputField) // 6- coloca o input criado dentro do item de lista vazio
                    _ul.appendChild(li) // 7- adiciona o item de lista, agora contendo o input, dentro da "ul" do modal
                }
            }

            function removeInputFields(){ //remove todos os itens da lista "ul" do modal, zerando ele
                _ul.innerHTML=''
            }

            function _resetForm(){ //reseta o "form" do modal
                _form.reset()
            }
            function cancel(){ //executa a função declarada antes para caso de falha e fecha o modal
                _failFn()
                close()
            }
            function close(){ //remove a classe _CLASS_OPEN do modal, fazendo com que o CSS esconda ele
                _modal.classList.remove(_CLASS_OPEN)
                removeInputFields() //remove os inputs criados, para que na próxima chamada do modal não fiquem duplicados
            }
            function open(settings, fields){
                createInputFields(fields) //cria os inputs dentro do modal
                _inputs = document.querySelectorAll('.modal form ul li input') //pega na DOM uma lista de inputs pertencentes ao modal e atribui a uma variável
                _modal.classList.add(_CLASS_OPEN) //adiciona a classe _CLASS_OPEN ao modal, fazendo com que o CSS mostre ele

                if(settings.fail){ //testa se foi passado o atributo "fail" na const successOrFailure e, caso sim, o atribui a uma variável
                    _failFn = settings.fail
                }

                if(settings.success){ //testa se foi passado o atributo "success" na const successOrFailure e, caso sim, o atribui a uma variável
                    _successFn = settings.success
                }

                _form.onsubmit = function(event){ 
                    event.preventDefault() //impede que a página seja recarregada ao enviar o formulário (clicar em OK no modal)
                    for(field of _inputs){ //aplica a função "success" (declarada na const successOrFailure) para cada um dos inputs do modal
                        _successFn(field)
                    }
                    close() //esconde o modal
                    _resetForm() //reseta o formulário do modal
                }
            }

            return{ //faz com que as funções "cancel", "close" e "open" declaradas dentro do módulo possam ser usadas fora dele
                cancel,
                close,
                open
            }
        })()
