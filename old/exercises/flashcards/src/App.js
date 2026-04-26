import { useState } from "react";

function App() {
  const qa = [
    {
      id: 3457,
      question: "What language is React based on?",
      answer: "JavaScript",
    },
    {
      id: 7494,
      question: "How to pass data from parent to child components?",
      answer: "With props",
    },
    {
      id: 2311,
      question: "What are the building blocks of React apps?",
      answer: "Components",
    },
    { 
      id: 2341,
      question: "How to give components memory",
      answer: "With useState hook" },
    {
      id: 9844,
      question: "What's the name of the syntax we use to describe a UI in React",
      answer: "JSX",
    },
    {
      id: 5648,
      question:
      "What do we call an input element that is completely synchronised with state?",
      answer: "A controlled element",
    },
  ];

  function Flashcards({ question, answer }) {
    const [turned, setTurned] = useState(false);

    const cardStyle = {
      backgroundColor: turned ? "#FF0000" : "#32CD32",
    };

    return (
      <div
        className={turned ? "cardSelected" : "card"}
        onClick={() => setTurned(!turned)}
        style={cardStyle}
      >
        {turned ? <h3>{answer}</h3> : <h3>{question}</h3>}
      </div>
    );
  }

  return (
    <div className="mycontainer">
      {qa.map((object) => (
        <Flashcards question={object.question} answer={object.answer} key={object.id}/>
      ))}
    </div>
  );
}

export default App;
