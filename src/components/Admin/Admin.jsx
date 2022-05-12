import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <section>
      <h1>Admins Page</h1>
      <br />
      <p>You are assigned an Admin role.</p>
      <div>
        <Link to="/">Home</Link>
      </div>
    </section>
  );
};

export default Admin;
