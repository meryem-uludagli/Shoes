import { FC } from "react";
import Header from "../header";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <div className="flex flex-col min-h-screen p-5">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
