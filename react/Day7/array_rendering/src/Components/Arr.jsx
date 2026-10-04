
const val=[  "HTML",
    "CSS",
    "JavaScript",
    "React"]
const Arr = () => {

  return (
    <>
        <div>
            {val.map((val, index) => (
                <p key={index}>
                    {val}
                </p>
            ))}
        </div>
    );
    </>
  )
}

export default Arr