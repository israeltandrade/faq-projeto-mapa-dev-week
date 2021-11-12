// BUSCAR OS ITENS DA TELA
const itensPerguntasRespostas = document.querySelectorAll('.item')

// ENDENTER QUE O ITEM FOI CLICADO
itensPerguntasRespostas.forEach(function(item) {
    console.log(item)

    item.addEventListener('click', function(){
        console.log('clicou')

        // VERIFICAR SE A PERGUNTA CLICADA ESTA ATIVA
        const estaAtiva = item.classList.contains('ativo')
        
        // SE A PERGUNTA NÃO ESTÁ ATIVA
        if(!estaAtiva) {
            //FECHAR TODAS
            itensPerguntasRespostas.forEach(function(item) {
                item.classList.remove('ativo')
            })

            // ABRIR A RESPOSTA ATUAL
            item.classList.add('ativo')
        } else {
            item.classList.remove('ativo')
        }



        // SENÃO

            // DESATIVAR (REMOVER CLASSE ATIVO)
    })
})

