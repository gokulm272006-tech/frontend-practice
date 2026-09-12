const card=document.querySelector('#card');
const inputfield=document.querySelector('#inputfield');
const addButton=document.querySelector('#addButton');


addButton.addEventListener('click',()=>{
    
    card.classList.toggle('hidden');
    let Value=inputfield.value;
    console.log(Value);
    
});