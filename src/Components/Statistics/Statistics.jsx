import PropTypes from "prop-types";
import style from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.stat__list}>
        {stats.map((elem) => (
          <li
            key={elem.id}
            className={style.item}
            style={{
              backgroundColor:
                "#" +
                (Math.random().toString(16) + "000000")
                  .substring(2, 8)
                  .toUpperCase(),
            }}
          >
            <span className={style.label}>{elem.label}</span>
            <span className={style.percentage}>{elem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default Statistics;
