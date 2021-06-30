import React, { useState } from "react";
import UserForm from "./components/User/UserForm";
import UserList from "./components/User/UserList";

const App = () => {
  const dummyList = [
    {
      key: Math.random().toString(),
      name: "hitesh gupta",
      age: 22,
    },
    {
      key: Math.random().toString(),
      name: "Aahan gupta",
      age: 18,
    },
    {
      key: Math.random().toString(),
      name: "dhruv gupta",
      age: 19,
    },
  ];

  const [usersList, setUsersList] = useState(dummyList);

  const addUserHandler = (userName, userAge, userKey) => {
    setUsersList((prevList) => {
      return [{ name: userName, age: userAge, key: userKey }, ...prevList];
    });
  };

  return (
    <div>
      <UserForm onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
};

export default App;
