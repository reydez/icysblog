import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";

const Dashboard = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      <h3>{currentUser?.uid}</h3>
      <h3>{currentUser?.displayName}</h3>
      <h3>{currentUser?.email}</h3>
      <h3>{currentUser?.phoneNumber}</h3>
      <h3>{currentUser?.providerId}</h3>
      <img
        src={currentUser?.photoURL}
        width="100px"
        alt={currentUser?.displayName}
      />
    </div>
  );
};

export default Dashboard;
