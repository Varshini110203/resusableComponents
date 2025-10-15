
const Dropdown = ({ name, options = [], value, onChange, ...props }) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      {...props}
    >
      <option value="">Select</option>
      {options.map((opt, index) => (
        <option key={index} value={opt.value || opt}>
          {opt.label || opt}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
