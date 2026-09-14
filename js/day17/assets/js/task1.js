
    const submitButton = document.getElementById('submit');
    const form=document.getElementById('studentForm');
    let inArray = [];

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const city = document.getElementById('city').value;
    let result=document.getElementById('result');

    const userData = {
        name: name,
        age: age, 
        city: city 
        };

        inArray.push(userData);
        result.innerHTML = "";
        
        // console.log(inArray);
        inArray.forEach((userData) => {
            result.innerHTML += `<br>Name: ${userData.name}, Age: ${userData.age}, City: ${userData.city}`;
        });
    
    
    form.reset();
    
    });






 