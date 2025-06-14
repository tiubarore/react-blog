import { Link } from "react-router";

function Nav({ search, setSearch }) {
  return (
    <nav className="text-center bg-blue-800 text-white p-2 flex">
      <ul className="flex sm:gap-3 gap-5  justify-center p-2 mx-auto">
        <li className="hover:bg-blue-400 lg:p-1.5  rounded sm:mx-1.5 lg:mx-2">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:bg-blue-400 lg:p-1.5 rounded  sm:mx-1.5 lg:mx-">
          <Link to="/post">New Post</Link>
        </li>
        <li className="hover:bg-blue-400 lg:p-1.5 rounded  sm:mx-1.5 lg:mx-2">
          <Link to="/about">About</Link>
        </li>
      </ul>

      <form
        className="searchForm self-center mx-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="search" className="">
          Search
        </label>
        <input
          className="border ml-3 p-1 rounded"
          type="text"
          id="search"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </nav>
  );
}
export default Nav;
