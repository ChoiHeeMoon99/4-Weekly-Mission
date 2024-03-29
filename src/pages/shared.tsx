import React from "react";
import Card from "../components/Card";
import FolderComponent from "../components/folderComponent";

function Shared() {
  return (
    <div>
      <FolderComponent />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card />
      </div>
    </div>
  );
}
export default Shared;
