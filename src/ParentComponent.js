import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentCompoent() {
  let [count, setCount] = useState(0);
  let [user, setUser] = useState([
    { label: "user_1", value: "user 1", selected: false },
    { label: "user_2", value: "user 2", selected: false },
    { label: "user_3", value: "user 3", selected: true }
  ]);
  const selectedUserDefault = user.filter(value => {
    return value.selected === true;
  });
  let [selectedUser, setSelectedUser] = useState(selectedUserDefault[0].value);

  const incrementCount = () => {
    let new_count = count + 1;
    setCount(new_count);
  };

  const resetCount = () => {
    setCount(0);
  };

  const selectUser = selecteduser => {
    const selectedUserValue = user;
    selectedUserValue.map(selectedvalue => {
      return selectedvalue.value === selecteduser
        ? (selectedvalue.selected = true)
        : (selectedvalue.selected = false);
    });

    setSelectedUser(selecteduser);
    setUser(selectedUserValue);
  };
  return (
    <React.Fragment>
      <div>This a Parent Compoent</div>
      count:{count}-{selectedUser}
      <ChildComponent
        incrementCount={incrementCount}
        resetCount={resetCount}
        user={user}
        selectUser={selectUser}
        selectedUser={selectedUser}
      />
    </React.Fragment>
  );
}

export default ParentCompoent;
