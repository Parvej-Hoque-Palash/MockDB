import React from "react";

const ValuePrint = ({ fields }) => {
  return (
    <div>
      {fields.map((field) => (
        <div>
          <p>{field.fieldName}</p>
          <p>{field.fieldType}</p>
          <p>{field.fieldLen}</p>
        </div>
      ))}
    </div>
  );
};

export default ValuePrint;
