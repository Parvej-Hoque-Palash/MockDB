import React from "react";
import "./InputField.css";
import ValuePrint from "./ValuePrint";

const InputField = ({ index, field, handleFieldChange, handleRemoveField,fields }) => {
  const { fieldName, fieldType, fieldLen } = field;
  console.log('field',field);
  console.log('fields',fields);
  const handleInputChange = (event) => {
    handleFieldChange(index, event);
  };

  const handleRemoveButtonClick = () => {
    handleRemoveField(index);
  };

  return (
    <div style={{ width: "50%" }} className="ml-5 mb-4">
      <div className="row">
        <div className="col">
          <label>Name</label>
          <input
            type="text"
            name="fieldName"
            placeholder="Field Name"
            value={fieldName}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="col">
          <label>Type</label>
          <input
            type="text"
            name="fieldType"
            placeholder="Field Type"
            value={fieldType}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="col">
          <label>Max Length</label>
          <input
            type="text"
            name="fieldLen"
            placeholder="Field Length"
            value={fieldLen}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        
          <button 
            type="button"
            
            className="btn btn-danger mt-0"
            onClick={handleRemoveButtonClick}
          >
            Remove
          </button>
        
      </div>
      <div>
        <ValuePrint/>
      </div>
    </div>
  );
};

export default InputField;
