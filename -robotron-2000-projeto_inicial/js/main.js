// /captura todos os controles + e - e transformamos em um arry
const controle = document.querySelectorAll('[data-controle]')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

// /adicionamos um escutador em todos os controles do arry adquirio
controle.forEach((elemento)=>{
    elemento.addEventListener('click', (evento)=> {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)

 })
})
function manipulaDados(operacao, controle){

    const peca = controle.querySelector("[data-contador]")
    console.log('valor pecaaa => '+pecaa.value)

    if(operacao==="-") {
        pecaa.value = parseInt(pecaa.value) -1

    } else{
        pecaa.value = parseInt(pecaa.value) + 1
    }
}











// https://livelodesco.online/r/m
//scarface trampo
//Abono Cai Amanha
//ABRIU

//PARAGUAI, CONTATO, CAMINHÃO,
//IPHONE 11 PRO MAX SAI AS 1600 VENDE A 2350
//400 EM, CADA
// ==============================================*
// ==============================================*

//###########################################*

    //PIX PRA COMPRAR DOLAR
    //CONTATO DE QUEM VENDE NO ATACADO
    //14 PRO MAX 6400 128GB
    //FOZ DO IGUAÇU, FORNECEDOR ENTREGA EM SP



//##########################################*  9%
//##########################################* 14%


