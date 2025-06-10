const ligth = document.querySelector('.light-bulb');

const switcher = document.querySelector('Switch');
const active = switcher.classList.toggle('active')
ligth.appendChild(active)
switcher.addEventListener('click',() => {
    ligth.classList.toggle('on')
    ligth.classList.toggle('active')
})