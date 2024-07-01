import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ friend: { name, avatar, isOnline } }) {
  return (
    <>
      <img className={css.img} src={avatar} alt="Avatar" width="96" />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.status, isOnline && css.active)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
}
