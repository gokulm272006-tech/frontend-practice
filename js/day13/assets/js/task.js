// let date=(name,oror)=>{
//     console.log(name);
//     oror();
// }

// let oror=()=>{
//     console.log("callback function");
// }

// date("John", oror);

let createCounter = () => {
    let count = 0;

    return () => {
        count++;
        console.log(count);
    };
};

let counter = createCounter();

counter();
counter();
counter();
counter();
