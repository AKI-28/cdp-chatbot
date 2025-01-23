import React from "react";

function InputBox({ question, setQuestion, onSubmit }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Ask a how-to question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
      <button onClick={onSubmit} style={{ padding: "10px", width: "100%" }}>
        Ask
      </button>
    </div>
  );
}

export default InputBox;
