import React from "react";

function AnswerBox({ answer, link }) {
  return (
    <div style={{ marginTop: "20px" }}>
      {answer && <p><strong>Answer:</strong> {answer}</p>}
      {link && (
        <p>
          <strong>For more details:</strong> 
          <a href={link} target="_blank" rel="noopener noreferrer" 
             style={{ marginLeft: "5px", color: "blue", textDecoration: "underline" }}>
            Click here
          </a>
        </p>
      )}
    </div>
  );
}

export default AnswerBox;
