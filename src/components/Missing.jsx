import { Link } from "react-router";

function Missing() {
  return (
    <main>
      <h2>Page Not Found</h2>
      <p>
        <Link to="/">Visit Our homepage</Link>
      </p>
    </main>
  );
}
export default Missing;
