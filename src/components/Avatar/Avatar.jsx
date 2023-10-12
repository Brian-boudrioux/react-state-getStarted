import "./avatar.css";
import { useState } from "react";

function Avatar(props) {

    const {image} = props;

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    function updateCount() {
        setCount(count + 1)
    }

    return (
        <article className="avatar">
            {name}
            <img src={image} />
            <p>{props.firstName} {props.lastName} {count} </p>
            <button onClick={updateCount}>Add</button>
            <input value={name} onChange={(event) => {setName(event.target.value)}}></input>
        </article>
    );
}

export default Avatar;
