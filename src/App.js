import styles from "./App.module.css";
import { useState } from "react";
import Select from "react-select";

function App() {
  const calculateFeerate = () => {
    const sizes = [178, 246, 314, 382, 450, 518, 586, 654, 722, 790];
    // console.log(targetedFeeRate, feeRateNeeded, transactionNumber);
    const txSize = sizes[transactionNumber - 1];
    const feeRate =
      (targetedFeeRate * (197 * transactionNumber + txSize) -
        transactionNumber) /
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
