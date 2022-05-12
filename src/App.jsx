import { Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Layout from "./components/Layout/Layout";
import LinkPage from "./components/LinkPage/LinkPage";
import Unauthorized from "./components/Unauthorized/Unauthorized";
import Home from "./components/Home/Home";
import Editor from "./components/Editor/Editor";
import Admin from "./components/Admin/Admin";
import Lounge from "./components/Lounge/Lounge";
import Missing from "./components/Missing/Missing";
import RequireAuth from "./components/RequireAuth/RequireAuth";

const ROLES = {
  User: 2001,
  Editor: 1984,
  Admin: 5150,
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* protected routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
          <Route path="editor" element={<Editor />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route
          element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.Editor]} />}
        >
          <Route path="lounge" element={<Lounge />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default App;
