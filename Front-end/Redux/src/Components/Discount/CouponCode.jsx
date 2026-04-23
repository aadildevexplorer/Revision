import React, { useState } from "react";

const CouponCode = () => {
  const [value, setValue] = useState("");
  const [amount, setAmount] = useState(20);
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const inputValueForDiscount = "code10";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === inputValueForDiscount) {
      console.log("Discount successfull!", value);
    } else {
      console.log("Discount Failed!", value);
    }
    setValue(true);
    if (value === inputValueForDiscount && !isCouponApplied) {
      setAmount((prev) => prev * 0.9);
      setIsCouponApplied(true);
    }
    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter Coupon Code"
        />
        <button type="submit">Apply</button>
      </form>

      {isCouponApplied ? (
        <h1 style={{ color: "green" }}>{amount}</h1>
      ) : (
        <h1 style={{ color: "red" }}>{amount}</h1>
      )}
    </div>
  );
};

export default CouponCode;
