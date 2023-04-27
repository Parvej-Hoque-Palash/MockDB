import React from "react";
import "./InputField.css";
const InputField = ({handleOnChange}) => {
  return (
    <div className="inputRaper">
      <div>
        <label>Name</label>
        <input type="text" name="fieldName"placeholder="Field Name" onChange={handleOnChange}></input>
      </div>
      <div>
        <label>Type</label>
        <input type="text" name="fieldType" placeholder="field type"  onChange={handleOnChange} />
      </div>
      <div>
        <label>Max Length</label>
        <input type="text" name="fieldLen" placeholder="field length"  onChange={handleOnChange} />
      </div>
    </div>
  );
};

export default InputField;
