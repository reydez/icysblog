import React, { useContext, useState } from "react";
import RenderTags from "./RenderTags";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import RenderSelect from "./RenderSelect";
import { registerDiscussion } from "../../service/firebase";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import "./CreateDiscussion.css";
import { UserContext } from "../../providers/UserProvider";
import Spinner from "react-bootstrap/Spinner";

const CreateDiscussion = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [dataError, setDataError] = useState(false);
  const [dataRegistered, setDataRegistered] = useState(false);
  const { currentUser } = useContext(UserContext);

  const toggleShow = () => setDataError(!dataError);
  const toggleShowRegistered = () => setDataRegistered(!dataRegistered);

  const handleRegisterDiscussion = (e) => {
    e.preventDefault();
    if (title.trim() === "" || description.trim() === "") {
      setDataError(true);
    } else {
      setDataError(false);
      setDataRegistered(true);
      registerDiscussion({
        title,
        description,
        selectedTags,
        userId: currentUser.uid,
        userPhoto: currentUser.photoURL,
        name: currentUser.displayName,
        email: currentUser.email,
      })
        .then(() => {
          setTitle("");
          setDescription("");
          setSelectedTags([]);
        })
        .finally(() => {
          setDataError(false);
          setDataRegistered(false);
        });
    }
  };

  const handleSelectedTags = (e) => {
    const found = selectedTags.find((tag) => tag === e.target.value);
    if (!found) {
      setSelectedTags([...selectedTags, e.target.value]);
    }
  };

  const handleRemoveTag = (name) => {
    setSelectedTags((prevTags) => prevTags.filter((tag) => tag !== name));
  };

  return (
    <div
      className="w-100 h-100 d-flex justify-content-center"
      style={{ gap: "20px", position: "relative" }}
    >
      <Form
        className="w-100 p-3 m-3 border rounded shadow  create-container"
        onSubmit={handleRegisterDiscussion}
      >
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter Discussion title"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            as="textarea"
            style={{ height: "150px", resize: "none" }}
            placeholder="Leave Description here"
          />
        </Form.Group>
        <RenderSelect
          selectedTags={selectedTags}
          handleSelectedTags={handleSelectedTags}
        />
        {selectedTags && (
          <div className="d-flex flex-wrap mb-3" style={{ gap: "7px" }}>
            <RenderTags
              selectedTags={selectedTags}
              handleRemoveTag={handleRemoveTag}
            />
          </div>
        )}
        <div className="d-flex justify-content-end">
          {!dataError && !dataRegistered && (
            <Button type="submit">Register discussion</Button>
          )}
          {dataError && (
            <Button type="submit" disabled={dataError}>
              <Spinner as="span" animation="border" size="sm" role="status" />
            </Button>
          )}
          {dataRegistered && (
            <Button type="submit" disabled={dataRegistered}>
              <Spinner as="span" animation="border" size="sm" role="status" />
            </Button>
          )}
        </div>
      </Form>
      <ToastContainer className="m-2" position="top-center">
        <Toast
          show={dataError}
          onClose={toggleShow}
          delay={3000}
          autohide
          bg="warning"
        >
          <Toast.Header>
            <div
              style={{
                width: "20px",
                height: "20px",
                background: "black",
                borderRadius: "5px",
                marginRight: "5px",
              }}
            ></div>
            <strong className="me-auto">Icys Blog!</strong>
          </Toast.Header>
          <Toast.Body>There is missing data.</Toast.Body>
        </Toast>
      </ToastContainer>
      <ToastContainer className="m-2" position="top-center">
        <Toast
          show={dataRegistered}
          onClose={toggleShowRegistered}
          delay={3000}
          autohide
          bg="success"
        >
          <Toast.Header>
            <div
              style={{
                width: "20px",
                height: "20px",
                background: "black",
                borderRadius: "5px",
                marginRight: "5px",
              }}
            ></div>
            <strong className="me-auto">Icys Blog!</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            Data registered successfully.
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default CreateDiscussion;
