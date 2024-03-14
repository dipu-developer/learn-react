import React, { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currentOption = [],
  selectCurrency = "usd",
  currencyDisable = false,
  className = "",
}) => {
  const uniqueId = useId();
  return (
    <>
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1-2">
          <label htmlFor={uniqueId} className="text-black/40 mb-2 inline-block">
            {label}
          </label>
          <input
            id={uniqueId}
            type="number"
            className="outline-none w-full bg-transparent py-1.5"
            placeholder="Amount"
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black/40 mb-2 w-full">Currency Type</p>
          <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            value={selectCurrency}
            onChange={(e) => {
              onCurrencyChange && onCurrencyChange(e.target.value);
            }}
            disabled={currencyDisable}
          >
            {currentOption.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default InputBox;
