import "./styles.css";

export function AddItemButton({ ...rest }) {
  return (
    <button type="button" className="addItemButton" {...rest}>
      +
    </button>
  );
}
