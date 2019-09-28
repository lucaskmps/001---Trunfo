
function averageBadge1(){
    var hp1 = Number(document.querySelector('#hp1').textContent)
    var at1 = Number(document.querySelector('#at1').textContent)
    var mg1 = Number(document.querySelector('#mg1').textContent)
    var sp1 = Number(document.querySelector('#sp1').textContent)
    var average = (hp1+at1+mg1+sp1) / 4

    if(average > 59 && average < 70){
        document.querySelector('.averageBadges1 .elite').style.display = 'block'
        document.querySelector('.averageBadges1 .pro').style.display = 'none'
        document.querySelector('.averageBadges1 .master').style.display = 'none'
    } 
    else if (average > 69 && average < 80){
        document.querySelector('.averageBadges1 .elite').style.display = 'none'
        document.querySelector('.averageBadges1 .pro').style.display = 'block'
        document.querySelector('.averageBadges1 .master').style.display = 'none'
    }
    else if (average > 79){
        document.querySelector('.averageBadges1 .elite').style.display = 'none'
        document.querySelector('.averageBadges1 .pro').style.display = 'none'
        document.querySelector('.averageBadges1 .master').style.display = 'block'
    }
    else{
        document.querySelector('.averageBadges1 .elite').style.display = 'none'
        document.querySelector('.averageBadges1 .pro').style.display = 'none'
        document.querySelector('.averageBadges1 .master').style.display = 'none'
    }
}

function averageBadge2(){
    var hp1 = Number(document.querySelector('#hp2').textContent)
    var at1 = Number(document.querySelector('#at2').textContent)
    var mg1 = Number(document.querySelector('#mg2').textContent)
    var sp1 = Number(document.querySelector('#sp2').textContent)
    var average = (hp1+at1+mg1+sp1) / 4

    if(average > 59 && average < 70){
        document.querySelector('.averageBadges2 .elite').style.display = 'block'
        document.querySelector('.averageBadges2 .pro').style.display = 'none'
        document.querySelector('.averageBadges2 .master').style.display = 'none'
    }    
    else if (average > 69 && average < 80){
        document.querySelector('.averageBadges2 .elite').style.display = 'none'
        document.querySelector('.averageBadges2 .pro').style.display = 'block'
        document.querySelector('.averageBadges2 .master').style.display = 'none'
    }
    else if (average > 79){
        document.querySelector('.averageBadges2 .elite').style.display = 'none'
        document.querySelector('.averageBadges2 .pro').style.display = 'none'
        document.querySelector('.averageBadges2 .master').style.display = 'block'
    }
    else{
        document.querySelector('.averageBadges2 .elite').style.display = 'none'
        document.querySelector('.averageBadges2 .pro').style.display = 'none'
        document.querySelector('.averageBadges2 .master').style.display = 'none'
    }
}