import PropTypes from "prop-types";
import style from "./Friends-list.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  let color = "red";
  if (isOnline) {
    color = "green";
  }
  return (
    <li className={style.item}>
      <span className={style.status} style={{ backgroundColor: color }}></span>
      <img className={style.avatar} src={avatar} alt={name} width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;
