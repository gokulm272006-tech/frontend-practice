const box=document.querySelector('#box');
const removeButton=document.querySelector('#removeButton');

removeButton.addEventListener('click', () => {
    box.classList.remove('active');
});