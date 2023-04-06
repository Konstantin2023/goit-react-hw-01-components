import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import { Friends, Friend } from './FriendList.styled';

function FriendList({ friends = [] }) {
  return (
    <Friends>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <Friend key={id}>
          <FriendListItem
            id={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        </Friend>
      ))}
    </Friends>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};

export default FriendList;
