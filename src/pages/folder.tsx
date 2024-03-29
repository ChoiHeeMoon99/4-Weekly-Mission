import React from "react";
import AddLink from "../components/addLink";
import FolderList from "../components/folderList";

function Folder() {
  return (
    <div>
      <AddLink />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FolderList />
      </div>
    </div>
  );
}
export default Folder;
