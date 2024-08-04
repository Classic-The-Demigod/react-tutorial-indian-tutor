function CommonInput({ name, label, type, onChange, id, value, placeholder }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={id}
        type={type || 'text'}
        placeholder={placeholder || "Enter value"}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default CommonInput;
