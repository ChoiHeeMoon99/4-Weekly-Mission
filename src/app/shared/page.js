import FolderComponent from "@/src/components/folderComponent";
import Card from "@/src/components/Card";
export default function Shared() {
  return (
    <div>
      <FolderComponent />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card />
      </div>
    </div>
  );
}
