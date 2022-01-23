function Hide(HideID) {
  HideID.style.display = "none"; 
};

function playAudio(src) {
  const audio = new Audio(src);
  audio.volume = 0.2;
  audio.play();
};

window.addEventListener('keydown', (e) => {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  if (!audio) {
    return;
  }
  audio.volume = 0.2;
  audio.play();
});
