import React from "react";

const ValuePrint = ({ fields }) => {
  const inlineStyle = {
    color: "#F1F6F9",
    fontFamily: "monospace",
    fontSize: "14px",
    backgroundColor: "#394867",
    padding: "10px",
    borderRadius: "5px",
  };
  const styles = {
    key: {
      color: "skyblue",
    },
    value: {
      color: "#FFD3B0",
    },
  };

  // Function to add color styles to JSON output
  const addColorStyles = (string, style) => {
    // Match keys
    string = string.replace(/("[^"]*")\s*:/g, (match, p1) => {
      return `<span style="${toStyleString(style.key)}">${p1}</span>:`;
    });

    // Match values
    string = string.replace(/:(\s*)"([^"]*)"/g, (match, p1, p2) => {
      return ` : <span style="${toStyleString(style.value)}">"${p2}"</span>`;
    });

    return string;
  };

  // Helper function to convert style object to CSS string
  const toStyleString = (style) => {
    return Object.entries(style)
      .map(([key, value]) => `${key} : ${value}`)
      .join(";");
  };
  return (
    <div>
      {fields.map((field) => {
        const MyObject = {
          fieldName: field.fieldName,
          fieldType: field.fieldType,
          fieldLen: field.fieldLen,
        };

        const jsonString = JSON.stringify(MyObject, null, 2);

        return (
          <div className="box">
            <pre
              style={inlineStyle}
              dangerouslySetInnerHTML={{
                __html: addColorStyles(jsonString, styles),
              }}
            ></pre>
          </div>
        );
      })}
    </div>
  );
};

export default ValuePrint;
