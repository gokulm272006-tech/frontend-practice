import { useState } from "react";

const AgeValidation = () => {
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (age.trim() === "") {
      setMessage("Age is required");
    } else {
      setMessage(`Entered Age: ${age}`);
      setAge("");
    }
  };

  return (
    <div>
      <h2>Age Validation</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <p>{message}</p>
    </div>
  );
};

export default AgeValidation;