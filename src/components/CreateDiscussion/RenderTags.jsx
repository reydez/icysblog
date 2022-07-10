import React, { useEffect, useState } from "react";
import Badge from "react-bootstrap/esm/Badge";

const RenderTags = ({ selectedTags, handleRemoveTag }) => {
  const renderTags =
    selectedTags.length > 0 ? (
      selectedTags.map((tag) => (
        <Badge
          className="font-weight-bold close-button-tag"
          key={tag.id}
          style={{ position: "relative" }}
          onClick={() => handleRemoveTag(tag)}
        >
          {tag}
        </Badge>
      ))
    ) : (
      <div className="px-2 mx-1 rounded border shadow-sm">
        No Tags selected...
      </div>
    );
  return renderTags;
};

export default RenderTags;
