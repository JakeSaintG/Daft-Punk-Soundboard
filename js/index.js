function Hide(HideID) {
  HideID.style.display = "none"; 
}

function playAudio(url) {
  new Audio(url).play();
}

window.addEventListener('keydown', (e) => {
  console.log(e)
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  if (!audio) {
    return;
  }
  audio.play();
});
