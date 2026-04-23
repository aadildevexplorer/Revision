import React, { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";

const Other = () => {
  const userName = useContext(UserContext);

  return (
    <div>
      <h1>{userName}</h1>
    </div>
  );
};

export default Other;
