import React, { useEffect, useState } from "react";
import { getDiscussions } from "../../service/firebase";
import Spinner from "react-bootstrap/Spinner";
import "./Content.css";
import { truncateString } from "../../utils";
import { OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";
import { Link } from "react-router-dom";

const RenderDiscussions = () => {
  const [discussions, setDiscussions] = useState(null);

  useEffect(() => {
    const handleGetDiscussions = async () => {
      const res = await getDiscussions();
      setDiscussions(res);
    };
    handleGetDiscussions();
  }, []);

  if (!discussions) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  const renderDiscussions = discussions.map((item, idx) => (
    <div
      className="w-100 h-100 p-3 border bg-white shadow-sm rounded card-container"
      style={{ height: "100px" }}
      key={idx}
    >
      <div className="img-container border shadow-sm p-2">
        <img className="border shadow-sm" src={item.userPhoto} />
        <span className="text-center">{item.name}</span>
      </div>
      <div className="card-container-body border p-2 rounded shadow-sm">
        <div className="title">
          <p>Title</p>
          <h3>{truncateString(item.title, 50)}</h3>
        </div>
        <div className="tags-container">
          <ul>
            {item.selectedTags &&
              item.selectedTags.map((tag) => (
                <li key={tag}>
                  <div className="tag-badge">{tag}</div>
                </li>
              ))}
          </ul>
        </div>
        <div className="go-detail">
          <span className="icon mx-2">
            <OverlayTrigger
              key="top"
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">Go to discussion details</Tooltip>
              }
            >
              <Link to={`/discussion/${item.id}`} role="button">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </Link>
            </OverlayTrigger>
          </span>
        </div>
      </div>
      <div className="card-container-footer border shadow-sm">
        <i class="fa-regular fa-thumbs-up"></i>
        <span>like</span>
        <i class="fa-solid fa-thumbs-up"></i>
        <span>Todavia no esta!!</span>
      </div>
    </div>
  ));

  return renderDiscussions;
};

export default RenderDiscussions;
