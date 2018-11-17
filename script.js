/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    // this.setSpeed = function (tocdo) {
    //     this.speed = tocdo;
    // }

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += 5;
        console.log('ok: ' + this.left);
    }

    this.moveLeft = function () {
        this.left -= 5;
    }

    this.moveTop = function () {
        this.top -= 5;
    }

    this.moveBottom = function () {
        this.top += 5;
    }
}

var hero = new Hero('ngunhutrung.png', 20, 30, 200, 20);

function right() {
    switch (hero.left) {
        case 0:
            moveTop();
            break;
        default:
            hero.moveLeft();
            document.getElementById('game').innerHTML = hero.getHeroElement();
            setTimeout(right, hero.speed)
    }
}

function left() {
    switch (hero.left) {
        case 1200:
            bot();
            break;
        default:
            hero.moveRight();
            document.getElementById('game').innerHTML = hero.getHeroElement();
            setTimeout(left, hero.speed);
    }
}


function moveTop() {
    switch (hero.top) {
        case 600:
            left();
            break;
        default:
            hero.moveBottom();
            document.getElementById('game').innerHTML = hero.getHeroElement();
            setTimeout(moveTop, hero.speed)
    }
}

function bot() {
    switch (hero.top) {
        case 0:
            right();
            break;
        default:
            hero.moveTop();
            document.getElementById('game').innerHTML = hero.getHeroElement();
            setTimeout(bot, hero.speed);
    }
}

right();

// function start(){
//   if(hero.left < window.innerWidth - hero.size){
//     hero.moveRight();
//   }
//   document.getElementById('game').innerHTML = hero.getHeroElement();
//   setTimeout(start, hero.speed)
// }
//
// start();