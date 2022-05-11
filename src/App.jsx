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
        <Route path="/" element={<Home />} />
        <Route path="editor" element={<Editor />} />
        <Route path="admin" element={<Admin />} />
        <Route path="lounge" element={<Lounge />} />

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default App;
