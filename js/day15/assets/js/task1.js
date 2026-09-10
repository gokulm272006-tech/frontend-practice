// const btn=document.getElementById('btn')
// const head=document.getElementById('head')

//     let Ison= false;

// btn.addEventListener('click',()=>{
//     Ison=!Ison;
//     if(Ison){
//         head.textContent='Hello broo!';
//     }else{
//         head.textContent='Hello, World!';
//     }
// }  );

// const head = document.getElementById('head');

// const btn = document.getElementById('btn');

// btn.addEventListener('click', () => {
//     head.textContent = 'Hello broo!';
//     btn.textContent = 'Clicked';
// });




const head = document.getElementById('head');

const btn = document.getElementById('btn');

let Ison= false;


btn.addEventListener('click', () => {
    Ison=!Ison;
    head.classList.toggle('active');
    btn.textContent=Ison?"hide":"show"
});
