const form = document.getElementById('employeeForm');
const btn=document.getElementById('btn');
let employeeArray = [];

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const empName = document.getElementById('empName').value;
    const empDept = document.getElementById('empDept').value;
    const empSalary = document.getElementById('empCity').value; 
    let result=document.getElementById('result');

    const employeeData = {
        empName: empName,
        empDept: empDept, 
        empSalary: empSalary 
    };
      
    employeeArray.push(employeeData);
    result.innerHTML = "";

    employeeArray.forEach((employeeData) => {
        result.innerHTML += `<tr>`;
    });
    form.reset();
});