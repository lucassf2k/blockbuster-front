import './styles.css'

export function Input({ label, id, onChange, ...rest }) {
  return (
    <fieldset className="section_form--field">
      <label htmlFor={id}>{label}</label>
      <input id={id} onChange={onChange} {...rest} />
    </fieldset>
  )
}
