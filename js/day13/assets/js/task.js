const titleInput = document.getElementById('title');
const contentInput = document.querySelectorAll('.content');
const changeTextButton = document.getElementById('btn');

changeTextButton.addEventListener('click', () => {
    titleInput.textContent = 'New Task Title';
    contentInput.forEach((p) => {
        p.textContent = 'New Task Content';
    });
});
