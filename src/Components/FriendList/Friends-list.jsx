import PropTypes from "prop-types";
import FriendListItem from "./Friend-list-item";
import style from "./Friends-list.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friend__list}>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FriendList;
