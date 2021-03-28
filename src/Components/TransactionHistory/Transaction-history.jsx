import PropTypes from "prop-types";
import style from "./Transaction-history.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={style.transaction__history}>
      <thead className={style.table__head}>
        <tr>
          <th className={style.header}>Type</th>
          <th className={style.header}>Amount</th>
          <th className={style.header}>Currency</th>
        </tr>
      </thead>

      <tbody className={style.table__body}>
        {items.map((item) => {
          return (
            <tr key={item.id} className={style.row}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactionData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: +PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
