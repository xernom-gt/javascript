const ligth = document.querySelector('.light-bulb');

const switchButton = document.getElementById('Switch');
switchButton.addEventListener('click',() => {
    ligth.classList.toggle('on')
})