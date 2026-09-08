const title=document.getElementById('title');
const btn=document.getElementById('btn');
btn.addEventListener('click',()=>{
    title.textContent='New Task Title';
    btn.textContent='Clicked!';
    title.classList.add('active');
    btn.classList.add('btn');
    
});