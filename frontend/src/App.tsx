import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Moderator from "./pages/Moderator";
import Info from "./pages/Info";

import ProtectedRoutes from "./components/ProtectedRoutes";
import { ALLOWED_ROLES } from "./config/allowedRolesConfig";
import Unauthorized from "./pages/Unauthorized";
import CheckToken from "./components/CheckToken";

import Layout from "./pages/Layout";
import Initial from "./pages/Initial";
import CheckLogged from "./components/CheckLogged";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<SignIn />} />
        <Route path="register" element={<SignUp />} />
        <Route element={<CheckToken />}>
          <Route element={<CheckLogged />}>
            <Route path="/" element={<Initial />} />
          </Route>
          <Route path="unauthorized" element={<Unauthorized />} />

          <Route element={<ProtectedRoutes allowedRoles={[ALLOWED_ROLES.Admin]} />}>
            <Route path="admin" element={<Admin />} />
          </Route>

          <Route
            element={
              <ProtectedRoutes allowedRoles={[ALLOWED_ROLES.Employer, ALLOWED_ROLES.Student, ALLOWED_ROLES.Admin]} />
            }
          >
            <Route path="home" element={<Home />} />
            <Route path="info" element={<Info />} />
          </Route>
        </Route>

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
