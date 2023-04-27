import React, { useState } from "react";
import InputField from "./component/InputField";

function App() {
  const [components, setComponents] = useState([<InputField />]);
  const [input, setNumberOfInputs] = useState(0);
  const [formValue, setFormValue] = useState([
    {
      fieldName: "",
      fieldType: "",
      fieldLen: "",
    },
  ]);

  const addComponent = () => {
    setComponents([...components, <InputField />]);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormValue((formValue) => ({
      ...formValue,
      [name]: value
    }));
  };

  const handleNumberOfInput = (e) => {
    const val = e.target.value;
    setNumberOfInputs(val);
    console.log(val);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleFormSubmit}>
          <button onClick={addComponent}>Add Component</button>
          {components.map((component, index) => (
            <InputField handleOnChange={handleOnChange} />
          ))}
        <div>
          <button type="submit">Submit</button>
        </div>
        </form>
        <div>
          <label>Number of inputs</label>
          <input type="number" onChange={handleNumberOfInput} />
        </div>
        
      </div>
      <div>
        <p>Number of Input Field = {input}</p>
      </div>
    </div>
  );
}

export default App;
