import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriedndListItem";

export default function FriendList({ friendsData }) {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {friendsData.map((friend) => (
          <li className={css.listItem} key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        ))}
      </ul>
    </div>
  );
}
