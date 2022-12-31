import React, { createContext, useState } from "react";
import Button from "./Button";
import OutputScreen from "./OutputScreen";

export const Props = createContext();

function Calculator() {
  const [answer, setAnswer] = useState(0);
  const [question, setQuestion] = useState("");

  const handleAction = (e) => {
    const action = e.target.value;
    switch (action) {
      case "=":
        var newAnswer = "";
        try{
          newAnswer=eval(question);
        } catch(err){
          setAnswer("Math Error")
        }
        if(newAnswer){
          setAnswer(newAnswer)
          setQuestion("")
        } else {
          setAnswer("Math Error")
          setQuestion("")
        }
        break;
      case "AC":
        setAnswer("");
        setQuestion("");
        break;
      case "DE":
        const newQuestion = question.substring(0, question.length - 1);
        setQuestion(newQuestion);
        break;
      default:
        setQuestion("");
        setAnswer("");
        break;
    }
  };
  return (
    <div className="calculator">
      <Props.Provider
        value={{ question, setQuestion, answer, setAnswer, handleAction }}
      >
        <OutputScreen valu={question} />
        <OutputScreen valu={answer } />
        <Button />
      </Props.Provider>
    </div>
  );
}

export default Calculator;
