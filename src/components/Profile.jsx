import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './Profile.module.css';

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={clsx(css.mainBox)}>
      {' '}
      <div className={clsx(css.avatarInfoBox)}>
        {' '}
        <img className={clsx(css.imgProfile)} src={image} alt="User avatar" />
        <p className={clsx(css.nameAvatar)}>{name}</p>
        <p className={clsx(css.avatarDescr)}>@{tag}</p>
        <p className={clsx(css.avatarDescr)}>{location}</p>{' '}
      </div>{' '}
      <ul className={clsx(css.statsList)}>
        {' '}
        <li className={clsx(css.statsListItem)}>
          <span>Followers</span>{' '}
          <span className={clsx(css.statsListItemCount)}>
            {stats.followers}
          </span>{' '}
        </li>{' '}
        <li className={clsx(css.statsListItem)}>
          <span>Views</span>{' '}
          <span className={clsx(css.statsListItemCount)}>{stats.views}</span>{' '}
        </li>{' '}
        <li className={clsx(css.statsListItem)}>
          <span>Likes</span>{' '}
          <span className={clsx(css.statsListItemCount)}>{stats.likes}</span>{' '}
        </li>{' '}
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string.isRequired,
  image: PropTypes.string,
  stats: PropTypes.string,
};

export default Profile;
