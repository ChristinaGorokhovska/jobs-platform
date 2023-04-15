import { Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";
import Home from "../pages/Home";

export default function CheckLogged() {
  const { auth } = useAuthContext();

  console.log("work", auth);
  return auth?.accessToken ? <Home /> : <Outlet />;
}
