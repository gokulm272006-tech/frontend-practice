

const Students = () => {
    const studentName = "Arun";
    const age = 22;
    const course = "React JS";
    const isActive = true;
    const fees = 15000;
    return (
        <>
            <h2>Student Details</h2> 
            <p className="flex">Student Name: {studentName}</p> 
            <p>Age: {age}</p> 
            <p>Course: {course}</p> 
            <p> Status: {isActive ? "Active" : "Inactive"} </p> 
            <p>Fees: {fees}</p>
        </>
    )
}

export default Students