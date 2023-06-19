import { Outlet } from "react-router-dom";
import { Header } from "./components";
import { DarkModeButton } from "./components";
import useScrollToTop from "./hooks/useScrollToTop";

function Root() {
  useScrollToTop();
  return (
    <>
      <Header />
      <Outlet />
      <DarkModeButton />
    </>
  );
}

export default Root;
