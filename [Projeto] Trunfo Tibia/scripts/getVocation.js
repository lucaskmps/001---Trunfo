function getVocation1(){
    var hp1 = Number(document.querySelector('#hp1').textContent)
    var at1 = Number(document.querySelector('#at1').textContent)
    var mg1 = Number(document.querySelector('#mg1').textContent)
    var sp1 = Number(document.querySelector('#sp1').textContent)

    if (hp1 > mg1 && hp1 > sp1 && at1 > mg1 && at1 > sp1){ // Knight
        document.querySelector('.badgesContainer .knight').style.display = 'flex'
        document.querySelector('.badgesContainer .paladin').style.display = 'none'
        document.querySelector('.badgesContainer .sorcerer').style.display = 'none' 
        document.querySelector('.badgesContainer .druid').style.display = 'none' 
        return 'knight'
    }
    else if (hp1 > at1 && hp1 > sp1 && mg1 > at1 && mg1 > sp1){ // Druid
        document.querySelector('.badgesContainer .druid').style.display = 'flex'
        document.querySelector('.badgesContainer .knight').style.display = 'none'
        document.querySelector('.badgesContainer .paladin').style.display = 'none'
        document.querySelector('.badgesContainer .sorcerer').style.display = 'none'
        return 'druid'
    }
    else if (at1 > hp1 && at1 > mg1 && sp1 > hp1 && sp1 > mg1){ // Paladin
        document.querySelector('.badgesContainer .druid').style.display = 'none'
        document.querySelector('.badgesContainer .knight').style.display = 'none'
        document.querySelector('.badgesContainer .paladin').style.display = 'flex'
        document.querySelector('.badgesContainer .sorcerer').style.display = 'none'
        return 'paladin'
    }
    else if (mg1 > at1 && mg1 > hp1 && sp1 > hp1 && sp1 > at1){ // Sorcerer
        document.querySelector('.badgesContainer .druid').style.display = 'none'
        document.querySelector('.badgesContainer .knight').style.display = 'none'
        document.querySelector('.badgesContainer .paladin').style.display = 'none'
        document.querySelector('.badgesContainer .sorcerer').style.display = 'flex'
        return 'sorcerer'
    }
    else{ // Nenhum
        document.querySelector('.badgesContainer .druid').style.display = 'none'
        document.querySelector('.badgesContainer .knight').style.display = 'none'
        document.querySelector('.badgesContainer .paladin').style.display = 'none'
        document.querySelector('.badgesContainer .sorcerer').style.display = 'none'  
    }
}


function getVocation2(){
    var hp1 = Number(document.querySelector('#hp2').textContent)
    var at1 = Number(document.querySelector('#at2').textContent)
    var mg1 = Number(document.querySelector('#mg2').textContent)
    var sp1 = Number(document.querySelector('#sp2').textContent)

    if (hp1 > mg1 && hp1 > sp1 && at1 > mg1 && at1 > sp1){ // Knight
        document.querySelector('.badgesContainer2 .knight').style.display = 'flex'
        document.querySelector('.badgesContainer2 .paladin').style.display = 'none'
        document.querySelector('.badgesContainer2 .sorcerer').style.display = 'none' 
        document.querySelector('.badgesContainer2 .druid').style.display = 'none' 
        return 'knight'
    }
    else if (hp1 > at1 && hp1 > sp1 && mg1 > at1 && mg1 > sp1){ // Druid
        document.querySelector('.badgesContainer2 .druid').style.display = 'flex'
        document.querySelector('.badgesContainer2 .knight').style.display = 'none'
        document.querySelector('.badgesContainer2 .paladin').style.display = 'none'
        document.querySelector('.badgesContainer2 .sorcerer').style.display = 'none'
        return 'druid'
    }
    else if (at1 > hp1 && at1 > mg1 && sp1 > hp1 && sp1 > mg1){ // Paladin
        document.querySelector('.badgesContainer2 .druid').style.display = 'none'
        document.querySelector('.badgesContainer2 .knight').style.display = 'none'
        document.querySelector('.badgesContainer2 .paladin').style.display = 'flex'
        document.querySelector('.badgesContainer2 .sorcerer').style.display = 'none'
        return 'paladin'
    }
    else if (mg1 > at1 && mg1 > hp1 && sp1 > hp1 && sp1 > at1){ // Sorcerer
        document.querySelector('.badgesContainer2 .druid').style.display = 'none'
        document.querySelector('.badgesContainer2 .knight').style.display = 'none'
        document.querySelector('.badgesContainer2 .paladin').style.display = 'none'
        document.querySelector('.badgesContainer2 .sorcerer').style.display = 'flex'
        return 'sorcerer'
    }
    else{ // Nenhum
        document.querySelector('.badgesContainer2 .druid').style.display = 'none'
        document.querySelector('.badgesContainer2 .knight').style.display = 'none'
        document.querySelector('.badgesContainer2 .paladin').style.display = 'none'
        document.querySelector('.badgesContainer2 .sorcerer').style.display = 'none'  
    }
}
