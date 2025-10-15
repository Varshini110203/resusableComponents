import { useState } from "react";
import "./App.css";
import TextBox from "./Components/TextBox.jsx";
import Button from "./Components/Button.jsx";
import Dropdown from "./Components/Dropdown.jsx";
import Table from "./Components/Table.jsx";

function App() {

  const [email, setEmail] = useState("");
  const [selectedFruit, setSelectedFruit] = useState("");

  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
  ];

  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Age", accessor: "age" },
    { header: "City", accessor: "city" },
  ];

  const data = [
    { name: "Alice", age: 25, city: "New York" },
    { name: "Bob", age: 30, city: "Chicago" },
  ];

 
  const handleSubmit = () => {
    alert(`Email: ${email}\nFruit: ${selectedFruit}`);
  };

  return (
    <>
      <TextBox
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />

      <Dropdown
        name="fruits"
        value={selectedFruit}
        onChange={(e) => setSelectedFruit(e.target.value)}
        options={options}
      />

      <Table columns={columns} data={data} />

      <Button
        text="Submit"
        type="button"
        onClick={handleSubmit}
        className="primary-btn"
      />
    </>
  );
}

export default App;
