
let playGround = document.getElementById('play-ground');
let Player = document.getElementById('player');
let x = 680;
let y = 380;
let computerOne = document.getElementById('computer-one');
let xOne = 200;
let yOne = 180;
let playerLives = 3;

console.log(playerLives);




document.onkeydown = function(e) {

    if ( e.key == 'ArrowUp') {
        y -= 5;
        Player.style.marginTop = y +'px';
        console.log(y)
        console.log(x);
    }
    if ( e.key == 'ArrowRight') {
        x += 5;
        Player.style.marginLeft = x +'px';
    }
    if (e.key == 'ArrowDown') {
        y += 5;
        Player.style.marginTop = y +'px';
    }
    if ( e.key == 'ArrowLeft') {
        x -= 5;
        Player.style.marginLeft = x +'px';
    }
    //   if the box touches the borders of the playground it resets the position of the box to the start point.
    let Width = document.getElementById('play-ground').clientWidth - 30;
    let Height = document.getElementById('play-ground').clientHeight - 30;
    let target = document.getElementById('lives-target');
    
    if ( y <= 0) {
        playerLives -= 1;
        target.innerHTML = 'Lives left ' + playerLives + '/3';
        y += 5;
        Player.style.marginTop = y + 'px';
        }
        else if (x <= 0) {
            playerLives -= 1;
            target.innerHTML = 'Lives left ' + playerLives + '/3';
            x += 5;
            Player.style.marginLeft = x + 'px'
        }
        else if (y >= Height) {
            playerLives -= 1;
            target.innerHTML = 'Lives left ' + playerLives + '/3';
            y -= 5;
            Player.style.marginTop = y + 'px';
        }
        else if (x >= Width) {
            playerLives -= 1;
            target.innerHTML = 'Lives left ' + playerLives + '/3';
            x -= 5;
            Player.style.marginLeft = x + 'px';
        }
        if(x == xOne && y == yOne) {
            playerLives -= 1;
            target.innerHTML = 'Lives left ' + playerLives + '/3';
            console.log('touched');

            
        }

        if( playerLives <= 0 ) {
            alert('GameOver')
            location.reload();
        }
}













// let upInput = false;
// let downInput = false;
// let rightInput = false;
// let leftInput = false;
// document.onkeydown = function(e) {
//     if (e.key === 'ArrowUp') {
//         upUp()
//     }
//     else if ( e.key === 'ArrowRight') {
//         rightRight()
//     }
// }

// function upUp() {
//     document.onkeydown = function (e) {
//         if (e.key === 'ArrowUp') {
//             upInput = true;
//             console.log(upInput);
//         }
//         if ( upInput === true) {
//             y -= 5;
//             Player.style.marginTop = y +'px';
//         }
//     };
//         document.onkeyup = function(e) {
//             if ( e.key === 'ArrowUp') {
//             upInput = false;
//             console.log(upInput);
//         }
//     }
// }

// function rightRight() {
//     document.onkeydown = function (e) {
//         if (e.key === 'ArrowRight') {
//             rightInput = true;
//             console.log(rightInput);
//         }
//         if ( rightInput === true) {
//             x += 5;
//             Player.style.marginLeft = x +'px';
//         }
//     };
//         document.onkeyup = function(e) {
//             if ( e.key === 'ArrowRight') {
//             rightInput = false;
//             console.log(rightInput);
//         }
//     }
// }