
document.querySelector('#p1Button').addEventListener('click', generateNumbersp1)

// Gerar o novo personagem
function generateNumbersp1(){

    generateNumbersP2();
    var random = Math.floor(Math.random() * 101)
    var random1 = Math.floor(Math.random() * 101)
    var random2 = Math.floor(Math.random() * 101)
    var random3 = Math.floor(Math.random() * 101)
    
    var hp1 = random
    document.querySelector('#hp1').innerText = hp1

    var at1 = random1
    document.querySelector('#at1').innerText = at1

    var mg1 = random2
    document.querySelector('#mg1').innerText = mg1

    var sp1 = random3
    document.querySelector('#sp1').innerText = sp1
    getVocation1();
    getVocation2();
    averageBadge1();
    averageBadge2();
    outfit1();
    outfit2();
}

// Gerar os atributos do 'Enemy'
function generateNumbersP2(){
    var random = Math.floor(Math.random() * 101)
    var random1 = Math.floor(Math.random() * 101)
    var random2 = Math.floor(Math.random() * 101)
    var random3 = Math.floor(Math.random() * 101)
    
    var hp1 = random
    document.querySelector('#hp2').innerText = hp1

    var at1 = random1
    document.querySelector('#at2').innerText = at1

    var mg1 = random2
    document.querySelector('#mg2').innerText = mg1

    var sp1 = random3
    document.querySelector('#sp2').innerText = sp1

    getVocation2();
    averageBadge2();
    outfit2();
}







