import "./styles.css";

export function Button({ title, ...rest }) {
  return (
    <button className="buttonContainer" {...rest}>
      {title}
    </button>
  );
}
