var knightsArray = [1,2,3,4,5,6,7,8,9,10,11,12] // Numeros das fotos da pasta img/chars. ex k4, k5


function outfit1(){
    var randomK = Math.floor(Math.random() * knightsArray.length) //Random para knights
    var voc = getVocation1();
   
    if(voc == 'knight'){
        document.querySelector('.playerCard .avatarBox img').src = 'img/chars/knights/k' + knightsArray[randomK] + '.png'
    }
    else{
        document.querySelector('.playerCard .avatarBox img').src = 'img/chars/citizen.png'
    }
}

function outfit2(){
    var randomK = Math.floor(Math.random() * knightsArray.length) //Random para knights
    var voc = getVocation2();
   
    if(voc == 'knight'){
        document.querySelector('.playerCard .avatarBox2 img').src = 'img/chars/knights/k' + knightsArray[randomK] + '.png'
    }
    else{
        document.querySelector('.playerCard .avatarBox2 img').src = 'img/chars/citizen.png'
    }
}