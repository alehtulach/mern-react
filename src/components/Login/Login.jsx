import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Link, TextField } from "@mui/material";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import "./styles.scss";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { setAuth } = useAuth();
  const [data, setData] = useState({});
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (field, value) => {
    setData((prevState) => ({ ...prevState, [field]: value }));
  };

  const isSubmitEnabled = () => {
    let dataProps = ["username", "password"];
    return dataProps.every((prop) => !!data[prop]);
  };

  const handleSubmit = async () => {
    try {
      const username = data["username"];
      const password = data["password"];
      const response = await axios.post(
        "/auth",
        { username, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ username, password, roles, accessToken });
      navigate(from, { replace: true });
    } catch (e) {
      if (!e?.response) {
        setErrorMsg("No Server Response");
      } else if (e.response?.status === 400) {
        setErrorMsg("Missing Username or Password");
      } else if (e.response?.status === 401) {
        setErrorMsg("Unauthorized");
      } else {
        setErrorMsg("Login Failed");
      }
    }
  };

  return (
    <div className="login_form">
      <p className="error">{errorMsg}</p>
      <h1>Sign In</h1>
      <TextField
        id="username"
        label="Username"
        variant="outlined"
        margin="normal"
        value={data?.username || ""}
        onChange={(e) => handleInputChange("username", e.target.value)}
      />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        margin="normal"
        value={data?.password || ""}
        onChange={(e) => handleInputChange("password", e.target.value)}
      />
      <Button
        variant="contained"
        margin="normal"
        disabled={!isSubmitEnabled()}
        onClick={handleSubmit}
      >
        Sign In
      </Button>
      <p>Need an Account?</p>
      <Link href="#" underline="always" onClick={() => navigate("/register")}>
        Sign Up
      </Link>
    </div>
  );
};

export default Login;
