import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { UserContext } from "../../providers/UserProvider";

const Dashboard = () => {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return (
      <div className="w-100 h-100 d-flex my-5 justify-content-center align-items-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

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
