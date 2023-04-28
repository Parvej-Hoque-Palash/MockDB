import React, { useState } from "react";
import InputField from "./InputField";
import ValuePrint from "./ValuePrint";

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
    <div className="formContainer">
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
      <div>
        <ValuePrint fields={fields}/>
      </div>
    </div>
  );
};

export default Form;
