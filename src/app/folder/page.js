import AddLink from "@/src/components/addLink";
import FolderList from "@/src/components/folderList";

export default function Folder() {
  return (
    <div>
      <AddLink />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FolderList />
      </div>
    </div>
  );
}
