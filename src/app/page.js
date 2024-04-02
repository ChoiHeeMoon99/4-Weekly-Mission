import Link from "next/link";
import HeaderNavigation from "../components/HeaderNavigation";
import Footer from "../components/Footer";
import InputText from "../components/Input/InputText";

export default function Home() {
  return (
    <div>
      <div
        style={{
          width: "500px",
          height: "100px",
          position: "relative",
          top: "100px",
          bottom: "150px",
        }}
      >
        {/* 임시 */}
        <Link href="/shared">
          <p>Shared Page</p>
        </Link>
        <Link href="/folder">
          <p>Folder Page</p>
        </Link>
        <InputText kind="id" />
        <InputText kind="password" />
      </div>
    </div>
  );
}
