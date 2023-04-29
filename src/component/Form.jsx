import React, { useState } from "react";
import InputField from "./InputField";
import ValuePrint from "./ValuePrint";
import NavBar from "./NavBar";

const Form = () => {
  const [fields, setFields] = useState([]);

  const handleFieldChange = (index, event) => {
    const { name, value } = event.target;
    const newFields = [...fields];
    newFields[index][name] = value;
    setFields(newFields);
  };

  const handleAddField = () => {
    setFields([...fields, { fieldName: "", fieldType: "", fieldLen: "" }]);
  };

  const handleRemoveField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    <InputField fields = {fields}/>
    console.log(fields);
  };

  return (
    <div >
      <h1 class="text-center">Mock Database</h1>
    <div className="d-flex flex-row">
      <div className="p-3 mb-2 mr-2 bg-transparent text-white">
      <NavBar/>
      </div>
    <div className="formContainer overflow-auto vh-100 p-3 mb-2 mr-2 bg-secondary text-white rounded-lg" style={{ width: "60%" }}>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <InputField
            key={index}
            index={index}
            field={field}
            handleFieldChange={handleFieldChange}
            handleRemoveField={handleRemoveField}
          />
        ))}
        <div className="buttonContainer">
          <button type="button" onClick={handleAddField} className="btn btn-primary mx-4">
            Add Field
          </button>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
      <div className="mt-5">
      <label>Number of Samples</label>
          <input
            type="text"
            name="numberOfSamples"
            placeholder="Number Of Samples"
          />
      </div>
    </div>
      <div class="overflow-auto vh-100 p-3 mb-2 bg-light text-white rounded-lg">
        <ValuePrint fields={fields}/>
      </div>
    </div>
    </div>
  );
};

export default Form;
