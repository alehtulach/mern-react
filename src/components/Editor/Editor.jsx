import { Link } from "react-router-dom";

const Editor = () => {
  return (
    <section>
      <h1>Editors Page</h1>
      <br />
      <p>You are assigned an Editor role.</p>
      <div>
        <Link to="/">Home</Link>
      </div>
    </section>
  );
};

export default Editor;
