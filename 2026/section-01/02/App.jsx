import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [counter, setCounter] = useState(0);
  console.log("⬜ - App - advice:", advice);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data?.slip?.advice);
    setCounter((prev) => prev + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>Advice:</h1>
      <div>
        <h1>{advice || ""}</h1>
        <Message counter={counter} />
      </div>
      <button onClick={getAdvice}>Get advice</button>
    </div>
  );
}

function Message(props) {
  return <p>You have read {props.counter} advice(s)</p>;
}
