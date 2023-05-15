import "./styles.css";

export function RegisterInput({label,id,onChange,...rest}) {
    return(
        <div className="textfield gray">
            <label htmlFor={id}>{label}</label>
            <input id={id} onChange={onChange} {...rest}/>
        </div>
    );
}
