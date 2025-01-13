import styles from "./App.module.css";
import { useState } from "react";
import Select from "react-select";

function App() {
  const calculateFeerate = () => {
    console.log("aaa");
    // const sizes = [178, 246, 314, 382, 450, 518, 586, 654, 722, 790];
    // console.log(targetedFeeRate, feeRateNeeded, transactionNumber);
    // const txSize = sizes[transactionNumber - 1];
    const txSize = 110 + transactionNumber * 68;
    const feeRate = 
      (targetedFeeRate * (197 * transactionNumber + txSize) -
        197* transactionNumber ) /
      txSize;
    setFeeRateNeeded(feeRate);
  };

  const options = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
    { value: 7, label: 7 },
    { value: 8, label: 8 },
    { value: 9, label: 9 },
    { value: 10, label: 10 },
    { value: 11, label: 11 },
    { value: 12, label: 12 },
    { value: 13, label: 13 },
    { value: 14, label: 14 },
    { value: 15, label: 15 },
    { value: 16, label: 16 },
    { value: 17, label: 17 },
    { value: 18, label: 18 },
    { value: 19, label: 19 },
    { value: 20, label: 20 },
    { value: 1, label: 21 },
    { value: 22, label: 22 },
    { value: 23, label: 23 },
    { value: 24, label: 24 },
    { value: 25, label: 25 },
    { value: 26, label: 26 },
    { value: 27, label: 27 },
    { value: 28, label: 28 },
    { value: 29, label: 29 },
    { value: 30, label: 30 },
  ];

  const [targetedFeeRate, setTargetedFeerate] = useState(1);
  const [feeRateNeeded, setFeeRateNeeded] = useState(1);
  const [transactionNumber, setTransactionNumber] = useState(1);

  return (
    <div className={styles.App}>
      <div style={{width: '480px', margin: '0 auto'}}>
        <div>
          {"Targeted feerate:"}{" "}
          <input
            type="text"
            onChange={(event) => setTargetedFeerate(event.target.value)}
          ></input>
        </div>
        <div>
          <Select
            options={options}
            onChange={(number) => setTransactionNumber(number.value)}
          />
        </div>
        <div>
          <button onClick={() => calculateFeerate()}>Get feerate</button>
        </div>
        {feeRateNeeded != 0 && feeRateNeeded}
      </div>
    </div>
  );
}
export default App;
