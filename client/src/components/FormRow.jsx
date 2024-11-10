const FormRow = ({ type, name, labelText, defaultValue }) => {
  return (
    <div className="form-row">
      <label htmlFor="{name}" className="form-label">
        {/* if labelText is defined and has a truthy value, it will be used;
        otherwise, the value of name will be used. This is a common way to
        provide a default value. */}
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="form-input"
        defaultValue={defaultValue || ''}
        required // makes the field mandatory, meaning the form cannot be submitted unless this field is filled out
      />
    </div>
  );
};
export default FormRow;
