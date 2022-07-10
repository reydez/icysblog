import React, { useEffect, useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { getTags } from "../../service/firebase";

const RenderSelect = ({ handleSelectedTags }) => {
  const [tags, setTags] = useState(null);

  useEffect(() => {
    const handleGetTags = async () => {
      const res = await getTags();
      setTags(res);
    };
    handleGetTags();
  }, []);

  return (
    <FloatingLabel
      className="p-1 mb-3"
      controlId="floatingSelect"
      label="Choose tags"
    >
      <Form.Select onChange={handleSelectedTags}>
        <option>Open to Choose tags</option>
        {tags && tags.map((tag) => <option key={tag.id}>{tag.name}</option>)}
      </Form.Select>
    </FloatingLabel>
  );
};

export default RenderSelect;
