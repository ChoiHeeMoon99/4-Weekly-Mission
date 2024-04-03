import Footer from "@/src/components/Footer";
import HeaderNavigation from "@/src/components/HeaderNavigation";
import AddLink from "@/src/components/addLink";
import FolderList from "@/src/components/folderList";

export default function Folder() {
  return (
    <div>
      <HeaderNavigation />
      <AddLink />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FolderList />
      </div>
      <Footer />
    </div>
  );
}
