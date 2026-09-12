const box=document.querySelector('#box');
const toggleButton=document.querySelector('#toggleButton');

toggleButton.addEventListener('click', () => {
    box.classList.add('active');
});