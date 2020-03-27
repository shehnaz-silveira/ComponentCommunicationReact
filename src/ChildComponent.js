import React from "react";

function ChildComponent({
  incrementCount,
  resetCount,
  user,
  selectUser,
  selectedUser
}) {
  const markselected = e => {
    const selectedUserValue = e.target.value;
    selectUser(selectedUserValue);
  };
  return (
    <React.Fragment>
      <div> I am a child Component check the count from me</div>
      <button onClick={incrementCount}>Increment Count</button>
      <button onClick={resetCount}>Reset</button>

      <select name="user" value={selectedUser} onChange={markselected}>
        {user &&
          user.length > 0 &&
          user.map((user, index) => (
            <option name={user.label} value={user.value} key={index}>
              {user.value}
            </option>
          ))}
      </select>
    </React.Fragment>
  );
}

export default ChildComponent;
