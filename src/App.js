import "./App.css";

import Profile from "./Components/Profile/Profile.jsx";
import Statistics from "./Components/Statistics/Statistics.jsx";
import FriendList from "./Components/FriendList/Friends-list.jsx";
import TransactionHistory from "./Components/TransactionHistory/Transaction-history.jsx";

import user from "./Components/Profile/user.json";
import statisticalData from "./Components/Statistics/statistical-data.json";
import friends from "./Components/FriendList/friends.json";
import transactions from "./Components/TransactionHistory/transactions.json";

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
