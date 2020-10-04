import React from "react";
import { saveNewUserToken } from "modules/users/users.saga";

const VList: React.FC = () => {
  const [data, setData] = React.useState({ test: "ok" }) as any

  const setNewUser = async () => {
    const user = await saveNewUserToken("060A21C4-195D-8541-9AEC-B30BC74651BEDB6CF5FD-CD18-4939-A69F-3DFD5161B972");
    setData(user);
  }

  const saveUser = () => {
    setNewUser();
  }

  return (
    <React.Fragment>
      <div>home</div>
      <button onClick={saveUser}>New user</button>
      <div>
        <code>{JSON.stringify(data)}</code>
      </div>
    </React.Fragment>
  );
};

export default VList;

