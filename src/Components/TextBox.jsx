const TextBox = ({name,value,onChange,type = "text",placeholder = "",disabled = false,className = "",...props}) => {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      className={`input ${className}`}
      {...props}
    />
  );
};

export default TextBox;
