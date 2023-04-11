import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { UserContext } from "../../providers/UserProvider";
import RenderUserDescussions from "./RenderUserDescussions";
import "./Dashboard.css";

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
    <div className="discussions-container-main">
      <div className="discussions-container">
        <h3>Discussions made by you.</h3>
        <RenderUserDescussions />
      </div>
    </div>
  );
};

export default Dashboard;
