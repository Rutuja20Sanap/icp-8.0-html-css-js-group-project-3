const emojis = [`🐶`,`🐭`,`🦊`,`🐻`,`🦁`,`🐸`,`🐷`,`🐥`,`🐶`,`🐭`,`🦊`,`🐻`,`🦁`,`🐸`,`🐷`,`🐥`];

let create_emojis = emojis.sort(createEmojis)

function createEmojis(){
if(Math.random() > 0.5){
 return  2 ;
}else{
    return -1 ;
}
}

function initializeGame() {
    const gameContainer = document.querySelector('.game');
    gameContainer.innerHTML = ''; // Clear existing emojis

for (let i = 0; i < emojis.length; i++) {
     let box = document.createElement('div');
     box.className = 'item';
    box.innerHTML = create_emojis[i];

    box.onclick = function() {
        this.classList.add('boxOpen');
        
        setTimeout(function() {

            if (document.querySelectorAll('.boxOpen').length > 1) {
                if (document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML) {

                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');

                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');

                    if (document.querySelectorAll('.boxMatch').length == emojis.length) {
                        alert('YOU WON THE GAME');
                    }

                } else {
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                }
            }

        }, 500);
    };
    document.querySelector('.game').appendChild(box);
}}

function resetGame() {
    create_emojis = emojis.sort(createEmojis);
    initializeGame();
}

// Initialize the game on page load
initializeGame();
