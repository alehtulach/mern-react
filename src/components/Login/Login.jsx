import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Link, TextField } from "@mui/material";
import AuthContext from "../../context/AuthProvider";
import "./styles.scss";
import axios from "../../api/axios";

const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const [data, setData] = useState({});
  const [success, setSuccess] = useState(false);
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
      const response = await axios.post("/auth", {
        username,
        password,
      });
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ username, password, roles, accessToken });
      setSuccess(true);
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
      {success ? (
        <>
          <h1>You are logged in!</h1>
          <Link href="#" underline="always">
            Go to Home
          </Link>
        </>
      ) : (
        <>
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
          <Link
            href="#"
            underline="always"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </Link>
        </>
      )}
    </div>
  );
};

export default Login;
