import useLocalStorage from "../../hooks/useLocalStorage";

function Exercise2() {
    const [name, setName] = useLocalStorage("name", "F8 User");
    const [mail, setEmail] = useLocalStorage("email", "");
    const [hobby, setHobby] = useLocalStorage("hobby", "");
    const [age, setAge] = useLocalStorage("age", "");
    const [education, setEducation] = useLocalStorage("education", "");
    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <p>Xin chào, {name}!</p>
             <input value={mail} onChange={(e) => setEmail(e.target.value)} />
            <p>Email: {mail}</p>
             <input value={hobby} onChange={(e) => setHobby(e.target.value)} />
            <p>Hobby : {hobby}</p>
               <input value={age} onChange={(e) => setAge(e.target.value)} />
            <p>Age : {age}</p>
            <input value={education} onChange={(e) => setEducation(e.target.value)} />
            <p>Education : {education}</p>
        </div>


    );
}

export default Exercise2;
