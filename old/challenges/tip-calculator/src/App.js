import React, { useState } from "react";
import BillInput from "./components/BillInput";
import LikePercentage from "./components/LikePercentage";
import DisplayBill from "./components/DisplayBill";
import ResetButton from "./components/ResetButton";

export default function App() {
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  const resetAll = () => {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  };

  return (
    <div>
      <BillInput bill={bill} onBillChange={setBill} />
      <LikePercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service 
      </LikePercentage>
      <LikePercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </LikePercentage>
      {bill > 0 && (
        <>
          <DisplayBill bill={bill} tip={tip} />
          <ResetButton onReset={resetAll} />
        </>
      )}
    </div>
  );
}
