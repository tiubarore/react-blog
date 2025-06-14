import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router";

function Layout({ search, setSearch }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header title="React JS Blog" />
      <Nav search={search} setSearch={setSearch} />
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default Layout;
