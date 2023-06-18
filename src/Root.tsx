import { Outlet } from "react-router-dom";
import { Header } from "./components";
import DarkModeButton from "./components/darkmodebutton/DarkModeButton";

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <DarkModeButton />
    </>
  );
}

export default Root;
