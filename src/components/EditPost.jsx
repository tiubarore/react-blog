import { useEffect } from "react";
import { useParams, Link } from "react-router";

const EditPost = ({
  posts,
  handleEdit,
  editTitle,
  setEditTitle,
  editBody,
  setEditBody,
}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditBody, setEditTitle]);
  return (
    <main className="bg-gray-800 p-12">
      {editTitle && (
        <form className="lg:px-64" onSubmit={(e) => e.preventDefault()}>
          <h3 className="text-center p-2 text-white font-display text-3xl">
            Edit Post
          </h3>
          <div className="grid-cols-6 mb-6 md:grid-cols-3">
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title:
              </label>
              <input
                type="text"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Title"
                required
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="body"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Post:
            </label>
            <textarea
              id="body"
              required
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Edit your post here..."
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            ></textarea>
          </div>
          <button
            onClick={() => handleEdit(post.id)}
            type="submit"
            className="py-2.5 px-5  mt-4 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Send
          </button>
        </form>
      )}
      {!editTitle && (
        <>
          <h1 className="text-2xl">Post Not Found</h1>
          <p>
            <Link to="/">Back To Home</Link>
          </p>
        </>
      )}
    </main>
  );
};
export default EditPost;
