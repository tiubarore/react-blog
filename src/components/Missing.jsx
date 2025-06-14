import { Link } from "react-router";

function Missing() {
  return (
    <main>
      <h2 className="text-center">Page Not Found</h2>
      <p className="text-center">
        <Link to="/">Visit Our homepage</Link>
      </p>
    </main>
  );
}
export default Missing;
