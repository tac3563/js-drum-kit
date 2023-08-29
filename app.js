function playSound (e) {
    const keyBtn = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    keyBtn.classList.toggle('playing');
    if(audio) {
        audio.play();
    }
}

window.addEventListener('keydown', playSound);