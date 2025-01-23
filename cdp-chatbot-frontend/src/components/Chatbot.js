import React, { useState } from "react";
import InputBox from "./InputBox";
import AnswerBox from "./AnswerBox";

function Chatbot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAskQuestion = async () => {
    if (!question) return;
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await response.json();
      setAnswer(data.answer || "Sorry, I couldn't find an answer.");
      setLink(data.link || "");
    } catch (error) {
      console.error("Error fetching response:", error);
      setAnswer("Oops! Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>CDP Chatbot</h2>
      <InputBox question={question} setQuestion={setQuestion} onSubmit={handleAskQuestion} />
      {loading ? <p>Loading...</p> : <AnswerBox answer={answer} link={link} />}
    </div>
  );
}

export default Chatbot;
