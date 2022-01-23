playAudio = (src) => {
  const audio = new Audio(src);
  audio.volume = setVolume();
  audio.play();
};

window.addEventListener('keydown', (e) => {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  if (!audio) {
    return;
  }
  audio.volume = setVolume();

  //Audio played via keypress can be done before the dialog box is closed.
  //The if-statement checks to make sure that the user agreed to the terms before any audio is played.
  if (dialogClosed) {
    audio.play();
  }
});

setVolume = () => {
  return 0.2;
}