import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";
import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ transactionData }) {
  console.log("transitionData", transactionData);

  return (
    <div className={css.container}>
      <table className={css.table}>
        <thead>
          <tr>
            <th className={css.th}>Type</th>
            <th className={css.th}>Amount</th>
            <th className={css.th}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactionData.map((tran) => (
            <tr key={tran.id}>
              <TransactionHistoryItem transactionData={tran} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
