import React, { useContext, useEffect, useState } from "react";
import { getUserDescussions } from "../../service/firebase";
import { UserContext } from "../../providers/UserProvider";
import { Link } from "react-router-dom";

const RenderUserDescussions = () => {
  const { currentUser } = useContext(UserContext);
  const [userDiscussions, setUserDiscussions] = useState(null);

  useEffect(() => {
    getUserDescussions(currentUser.uid).then(setUserDiscussions);
  }, []);

  return (
    <div className="discussion-user-container">
      {userDiscussions &&
        userDiscussions.map((userDiscussion) => (
          <div
            key={userDiscussion.id}
            className="discussion-user-container-each"
          >
            <div>{userDiscussion.title}</div>

            <div className="options d-flex justify-content-center align-items-center">
              <button className="btn btn-success py-1 px-2 mx-1">update</button>
              <button className="btn btn-danger py-1 px-2 mx-1">delete</button>
              <button className="btn btn-primary py-1 px-2 mx-1">
                <Link to={`/discussion/${userDiscussion.id}`} role="button">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </Link>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RenderUserDescussions;
