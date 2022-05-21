
let playGround = document.getElementById('play-ground');
let Player = document.getElementById('player');
let x = 680;
let y = 380;
let playerLives = 3;
let xOne = 200;
let yOne = 180;




document.onkeydown = function(e) {
//************************* */ moving the player ***********************
    if ( e.key == 'ArrowUp') {
        y -= 10;
        Player.style.marginTop = y +'px';
    }
    if ( e.key == 'ArrowRight') {
        x += 10;
        Player.style.marginLeft = x +'px';
    }
    if (e.key == 'ArrowDown') {
        y += 10;
        Player.style.marginTop = y +'px';
    }
    if ( e.key == 'ArrowLeft') {
        x -= 10;
        Player.style.marginLeft = x +'px';
    }

    //   ************** touch border recognition **************
    let Width = document.getElementById('play-ground').clientWidth - 30;
    let Height = document.getElementById('play-ground').clientHeight - 60;
    let target = document.getElementById('lives-target');
    
    if ( y <= 0) {
        playerLives -= 1;
        target.innerHTML = 'Lives left ' + playerLives + '/3';
        y += 10;
        Player.style.marginTop = y + 'px';
        }
        else if (x <= 0) {
            playerLives -= 1;
            target.innerHTML = 'Lives left ' + playerLives + '/3';
            x += 10;
            Player.style.marginLeft = x + 'px'
        }
        else if (y >= Height) {
            playerLives -= 1;
            target.innerHTML = 'Lives left ' + playerLives + '/3';
            y -= 10;
            Player.style.marginTop = y + 'px';
        }
        else if (x >= Width) {
            playerLives -= 1;
            target.innerHTML = 'Lives left ' + playerLives + '/3';
            x -= 10;
            Player.style.marginLeft = x + 'px';
        }



// ****************variables for the 4 boxes and player for collision recognition***************
        let cOne = document.getElementById('computer-one');
        let boxOne = document.getElementById('computer-one').getBoundingClientRect();
        let boxOneTop = boxOne.top;
        let boxOneLeft = boxOne.left;
        let boxOneRight = boxOne.right;
        let boxOneBottom = boxOne.bottom;

        let boxTwo = document.getElementById('computer-two').getBoundingClientRect();
        let boxTwoTop = boxTwo.top;
        let boxTwoLeft = boxTwo.left;
        let boxTwoRight = boxTwo.right;
        let boxTwoBottom = boxTwo.bottom;

        let boxThree = document.getElementById('computer-three').getBoundingClientRect();
        let boxThreeTop = boxThree.top;
        let boxThreeLeft = boxThree.left;
        let boxThreeRight = boxThree.right;
        let boxThreeBottom = boxThree.bottom;

        let boxFour = document.getElementById('computer-four').getBoundingClientRect();
        let boxFourTop = boxFour.top;
        let boxFourLeft = boxFour.left;
        let boxFourRight = boxFour.right;
        let boxFourBottom = boxFour.bottom;

        let playerBox =  document.getElementById('player').getBoundingClientRect();
        let playerBoxTop = playerBox.top;
        let playerBoxLeft = playerBox.left;
        let playerBoxRight = playerBox.right;
        let playerBoxBottom = playerBox.bottom;
            // ********************** vertical and horizontal collision recognition **********************

            // box 1
        let verticalMatchOne = false;
        let horizontalMatchOne = false;
        
        if ((playerBoxTop > boxOneTop && playerBoxTop < boxOneBottom)||(playerBoxBottom > boxOneTop && playerBoxBottom < boxOneBottom)) {
            verticalMatchOne = true
        } else{
            verticalMatchOne = false
        }
        if ((boxOneRight > playerBoxLeft && boxOneLeft < playerBoxRight) || (boxOneLeft > playerBoxLeft && boxOneRight < playerBoxRight)){
            horizontalMatchOne = true;
        }
        else {
            horizontalMatchOne = false;
        }

        // box 2
        let verticalMatchTwo = false;
        let horizontalMatchTwo = false;
        if ((playerBoxTop > boxTwoTop && playerBoxTop < boxTwoBottom)|| (playerBoxBottom > boxTwoTop && playerBoxBottom < boxTwoBottom)) {
            verticalMatchTwo = true
        } else{
            verticalMatchTwo = false
        }
        if ((boxTwoRight > playerBoxLeft && boxTwoLeft < playerBoxRight )|| (boxTwoLeft > playerBoxLeft && boxTwoRight < playerBoxRight)){
            horizontalMatchTwo = true;
        }
        else {
            horizontalMatchTwo = false;
        }

        // box 3
        let verticalMatchThree = false;
        let horizontalMatchThree = false;
        if ((playerBoxTop > boxThreeTop && playerBoxTop < boxThreeBottom)||(playerBoxBottom > boxThreeTop && playerBoxBottom < boxThreeBottom)) {
            verticalMatchThree = true
        } else{
            verticalMatchThree = false
        }
        if ((boxThreeRight > playerBoxLeft && boxThreeLeft < playerBoxRight) || (boxThreeLeft > playerBoxLeft && boxThreeRight < playerBoxRight)){
            horizontalMatchThree = true;
        }
        else {
            horizontalMatchThree = false;
        }

        // box 4
        let verticalMatchFour = false;
        let horizontalMatchFour = false;
        if ((playerBoxTop > boxFourTop && playerBoxTop < boxFourBottom)||(playerBoxBottom > boxFourTop && playerBoxBottom < boxFourBottom)) {
            verticalMatchFour = true
        } else{
            verticalMatchFour = false
        }
        if ((boxFourRight > playerBoxLeft && boxFourLeft < playerBoxRight )||( boxFourLeft > playerBoxLeft && boxFourRight < playerBoxRight)){
            horizontalMatchFour = true;
        }
        else {
            horizontalMatchFour = false;
        }

            // ************************collision with box recognition*******************************
        if (horizontalMatchOne == true && verticalMatchOne == true){
            console.log('YEEEEETTT')
            playerLives -= 1;
            target.innerHTML = 'Lives left ' + playerLives + '/3';

        }
        if (horizontalMatchTwo == true && verticalMatchTwo == true){
            console.log('YEEEEETTT')
            playerLives -= 1;
            target.innerHTML = 'Lives left ' + playerLives + '/3';

        }
        if (horizontalMatchThree == true && verticalMatchThree == true){
            console.log('YEEEEETTT')
            playerLives -= 1;
            target.innerHTML = 'Lives left ' + playerLives + '/3';

        }
        if (horizontalMatchFour == true && verticalMatchFour == true){
            console.log('YEEEEETTT')
            playerLives -= 1;
            target.innerHTML = 'Lives left ' + playerLives + '/3';

        }
            // ******************* restarting the game after death *****************************
        if( playerLives <= 0 ) {
            Player.style.color = 'yellow';
            alert('GameOver!')
            location.reload();

        }
        else if (playerLives == 2){
            Player.style.color = 'orange';
        }
        else if (playerLives == 1){
            Player.style.color = 'red';
        }
}









        // ********** trying to make it move diagonally ***************



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