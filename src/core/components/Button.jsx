const Button = ({text, onClick,type = "button",name,disabled = false,className = "",...props}) => {
  return (
    <button
      type={type}
      name={name}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
