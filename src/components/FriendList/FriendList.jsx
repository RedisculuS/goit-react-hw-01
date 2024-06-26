import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="150" />
      <p className={clsx(css.friendDescr)}>{name}</p>
      <p className={clsx(isOnline ? css.online : css.offline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export const FriendList = ({ friends }) => {
  return (
    <ul className={clsx(css.friendList)}>
      {friends.map(friend => {
        return (
          <li className={clsx(css.friendListItem)} key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendList;
