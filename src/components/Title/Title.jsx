import "./title.css";

function Title(props) {
    return (
        <div className="container">
            <h1 className="title">{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    )
}

function sum(a, b) {
    return a + b;
}

export {sum};

export default Title;