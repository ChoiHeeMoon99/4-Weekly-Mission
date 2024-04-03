import FolderComponent from "@/src/components/folderComponent";
import Card from "@/src/components/Card";
import HeaderNavigation from "@/src/components/HeaderNavigation";
import Footer from "@/src/components/Footer";
export default function Shared() {
  return (
    <div>
      <HeaderNavigation />
      <FolderComponent />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card />
      </div>
      <Footer />
    </div>
  );
}
