dialogClosed = false;

window.onload = () => {
  document.querySelector('dialog').showModal()
};

document.getElementById('close').addEventListener('click', () => {
    dialogClosed = true;
    document.querySelector('dialog').close();
})

