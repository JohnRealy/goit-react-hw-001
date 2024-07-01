import Profile from "./Profile/Profile";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import userData from "../usersData.json";
import friendsData from "../friendsData.json";
import transactionData from "../transactionData.json";

export default function App() {
  return (
    <>
      <Profile userData={userData} />
      <FriendList friendsData={friendsData} />
      <TransactionHistory transactionData={transactionData} />
    </>
  );
}
