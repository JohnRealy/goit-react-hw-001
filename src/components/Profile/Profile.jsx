import clsx from "clsx";
import css from "./Profile.module.css";

export default function Profile({
  userData: { username, tag, location, avatar, stats },
}) {
  return (
    <div className={css.container}>
      <div className={css.item}>
        <div>
          <img className={css.img} src={avatar} alt={username} />
          <h3 className={css.heading}>{username}</h3>
          <p className={css.info}>@{tag}</p>
          <p className={css.info}>{location}</p>
        </div>

        <ul className={css.list}>
          <li className={clsx(css.listItem, css.last)}>
            <span>Followers</span>
            <span className={css.stats}>{stats.followers}</span>
          </li>
          <li className={css.listItem}>
            <span>Views</span>
            <span className={css.stats}>{stats.views}</span>
          </li>
          <li className={css.listItem}>
            <span>Likes</span>
            <span className={css.stats}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
