import React, { useContext } from "react";
import { Props } from "./Calculator";

function Button() {
  const { setQuestion, handleAction } = useContext(Props);

  const handleQuestion = (e) => {
    if (e.target.value == "%") {
      setQuestion((prev) => {
        if(prev){
          let ans = prev.concat("/100");
          ans = eval(ans);
          return ans.toString();
        }
        else{
          return ""
        }
      });
    } 
    else {
      setQuestion((prev) => {
        console.log(prev);
        return prev.concat(e.target.value)});
    }
  };

  return (
    <div className="button">
      <input
        onClick={handleAction}
        className="btn-gray"
        type="button"
        value="AC"
      />
      <input
        onClick={handleAction}
        className="btn-gray"
        type="button"
        value="DE"
      />
      <input
        onClick={handleQuestion}
        className="btn-gray"
        type="button"
        value="%"
      />
      <input
        onClick={handleQuestion}
        className="btn-orange"
        type="button"
        value="/"
      />
      <input
        onClick={handleQuestion}
        className="btn-number"
        type="button"
        value="7"
      />
      <input
        onClick={handleQuestion}
        className="btn-number"
        type="button"
        value="8"
      />
      <input
        onClick={handleQuestion}
        className="btn-number"
        type="button"
        value="9"
      />
      <input
        onClick={handleQuestion}
        className="btn-orange"
        type="button"
        value="*"
      />
      <input
        onClick={handleQuestion}
        className="btn-number"
        type="button"
        value="4"
      />
      <input
        onClick={handleQuestion}
        className="btn-number"
        type="button"
        value="5"
      />
      <input
        onClick={handleQuestion}
        className="btn-number"
        type="button"
        value="6"
      />
      <input
        onClick={handleQuestion}
        className="btn-orange"
        type="button"
        value="-"
      />
      <input
        onClick={handleQuestion}
        className="btn-number"
        type="button"
        value="1"
      />
      <input
        onClick={handleQuestion}
        className="btn-number"
        type="button"
        value="2"
      />
      <input
        onClick={handleQuestion}
        className="btn-number"
        type="button"
        value="3"
      />
      <input
        onClick={handleQuestion}
        className="btn-orange"
        type="button"
        value="+"
      />
      <input
        onClick={handleQuestion}
        className="btn-number btn-zero"
        type="button"
        value="0"
      />
      <input
        onClick={handleQuestion}
        className="btn-number"
        type="button"
        value="."
      />
      <input
        onClick={handleAction}
        className="btn-orange"
        type="button"
        value="="
      />
    </div>
  );
}

export default Button;
