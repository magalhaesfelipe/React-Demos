export default function BillInput({ bill, onBillChange }) {
  return (
    <div className="container">
      <p>How much was the bill? </p>
      <input
        type="text"
        onChange={(e) => onBillChange(Number(e.target.value))}
        value={bill}
      />
    </div>
  );
}
