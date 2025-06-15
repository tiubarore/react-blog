import { Link, useParams } from "react-router";

function PostPage({ posts, handleDelete }) {
  const { id } = useParams();
  const post = posts.find((post) => post.id == id);
  return (
    <main>
      <article className="lg:px-85 px-4 md:px-20   mt-4 flex flex-col">
        {post && (
          <>
            <h2 className="text-4xl font-display font-bold text-center">
              {post.title}
            </h2>
            <p className="font-thin  text-gray-500 text-center mb-2">
              {post.datetime}
            </p>
            <button
              className="text-white font-poppins rounded cursor-pointer mb-4 font-semibold bg-red-600 p-2.5 text-center hover:bg-red-700"
              onClick={() => handleDelete(post.id)}
            >
              Delete Post
            </button>

            <p className="leading-8 font-body sm:text-2xl font-poppins">
              {post.body}
            </p>
          </>
        )}
        {!post && (
          <>
            <p>No post available</p>
            <Link to="/">Return Home</Link>
          </>
        )}
      </article>
    </main>
  );
}
export default PostPage;
