document.querySelector('#midContainer #battleButton').addEventListener('click', battle)

function battle(){

    var hp1 = Number(document.querySelector('#hp1').textContent)
    var at1 = Number(document.querySelector('#at1').textContent)
    var mg1 = Number(document.querySelector('#mg1').textContent)
    var sp1 = Number(document.querySelector('#sp1').textContent)

    var hp2 = Number(document.querySelector('#hp2').textContent)
    var at2 = Number(document.querySelector('#at2').textContent)
    var mg2 = Number(document.querySelector('#mg2').textContent)
    var sp2 = Number(document.querySelector('#sp2').textContent)

    randAtt = Math.floor(Math.random() * 3)
    chosen1 = "";
    chosen2 = "";
    sorted = "";

    switch(randAtt){
        case 0:
            chosen1 = hp1
            chosen2 = hp2
            sorted = 'Health'
            break
        case 1:
            chosen1 = at1
            chosen2 = at2
            sorted = 'Melee'
            break
        case 2:
            chosen1 = mg1
            chosen2 = mg2
            sorted = 'Magic'
            break
        case 3:
            chosen1 = sp1
            chosen2 = sp2
            sorted = 'Speed'
    }

    if (chosen1 > chosen2){ // Vitória
        document.querySelector('#killsContainer #numberKills').style.display = 'block'
        document.querySelector('#killsContainer #restText').style.display = 'block'

        var kills = Number(document.querySelector('#killsContainer #numberKills').textContent)
        kills++
        document.querySelector('#killsContainer #numberKills').innerText = kills
        generateNumbersP2();
        skulls();
    }
    else if (chosen1 == chosen2) { // Empate
        battle();
    }
    else { // Derrota
        location.reload();
    }
}

function skulls(){
    var kills = Number(document.querySelector('#killsContainer #numberKills').textContent)

    if(kills > 4 && kills < 10){
        var img = document.querySelector('#killsContainer #skullContainer img')
        img.src='img/ui/whiteskull.gif'
        img.style.display = 'block'
    }
    else if (kills > 9 && kills < 20){
        var img = document.querySelector('#killsContainer #skullContainer img')
        img.src='img/ui/yellowskull.gif'
    }
    else if (kills > 19){
        var img = document.querySelector('#killsContainer #skullContainer img')
        img.src='img/ui/redskull.gif'
    }
}