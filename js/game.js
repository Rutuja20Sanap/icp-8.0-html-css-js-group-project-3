const emojis = [`🐶`,`🐭`,`🦊`,`🐻`,`🦁`,`🐸`,`🐷`,`🐥`,`🐶`,`🐭`,`🦊`,`🐻`,`🦁`,`🐸`,`🐷`,`🐥`];

let change_emojis = emojis.sort(ChangeEmojies);
function ChangeEmojies(){
    if(Math.random() > 0.5){
        return  2 ;
    }else{
        return -1 ;
    }  
}
for (let i = 0; i < emojis.length; i++){
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = change_emojis[i];

    box.onclick = function() {
        this.classList.add('boxOpen');

        setTimeout(function() {

            if (document.querySelectorAll('.boxOpen').length > 1) {
                if (document.querySelector('.boxOpen')[0].innerHTML == document.querySelector('.boxOpen')[1].innerHTML) {

                    document.querySelector('.boxOpen')[0].classList.add('boxMatch');
                    document.querySelector('.boxOpen')[1].classList.add('boxMatch');

                    document.querySelector('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelector('.boxOpen')[0].classList.remove('boxOpen');

                    if (document.querySelector('.boxMatch').length == emojis.length) {
                        alert('win');
                    }
                    else {
                        document.querySelector('.boxOpen')[1].classList.remove('boxOpen');
                        document.querySelector('.boxOpen')[0].classList.remove('boxOpen');
                    }
                }
                }
    })
} }