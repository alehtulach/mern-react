import { useState } from "react";
import { TextField, Button, Link } from "@mui/material";
import axios from "../../api/axios";
import "./styles.scss";

const Register = () => {
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

  // const handleSubmit = async () => {
  //   try {
  //     const result = await axios.post(
  //       "/register",
  //       JSON.stringify({
  //         username: data["username"],
  //         password: data["password"],
  //       }),
  //       {
  //         headers: { "Content-Type": "application/json" },
  //         withCredentials: true,
  //       }
  //     );
  //     setSuccess(true);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  return (
    <div className="register_form">
      {success ? (
        <>
          <h1>Success!</h1>
          <Link href="#" underline="always">
            Sign In
          </Link>
        </>
      ) : (
        <>
          <p className="error">{errorMsg}</p>
          <h1>Register</h1>
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
            // onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <p>Already registered?</p>
          <Link href="#" underline="always">
            Sign In
          </Link>
        </>
      )}
    </div>
  );
};

export default Register;
