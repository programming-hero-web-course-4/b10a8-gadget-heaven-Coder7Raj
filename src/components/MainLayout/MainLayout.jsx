import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      {" "}
      {/* Navbar */}
      <header className="h-16">
        <Navbar />
      </header>
      {/* Main Content */}
      <main className="min-h-[calc(100vh-254px)] container mx-auto">
        <Outlet />
      </main>
      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
