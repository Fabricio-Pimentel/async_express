// 1.1 -- Aquecimento: Criando sua primeira Promise com Delay

function saudacaoAssincrona(nome) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (`Olá, ${nome}! Bem-vindo ao Mensageiro Local.`);
            }, 2000);
        });
}

saudacaoAssincrona('Fabricio').then((resposta) => console.log(resposta));

// 1.2 -- Validação e Rejeição com reject

function obterMensagemPorId(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

        },1000)
    });
}
