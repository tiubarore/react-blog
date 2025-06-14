import { Link, useParams } from "react-router";

function PostPage({ posts, handleDelete }) {
  const { id } = useParams();
  const post = posts.find((post) => post.id == id);
  return (
    <main>
      <article className="lg:px-64 px-4 md:px-20   mt-4 flex flex-col">
        {post && (
          <>
            <h2 className="text-4xl font-display font-bold text-center">
              {post.title}
            </h2>
            <p className="font-thin text-gray-500 self-end mb-2">
              {post.datetime}
            </p>
            <button
              className="text-white rounded cursor-pointer mb-4 font-semibold bg-red-600 p-2.5 self-end"
              onClick={() => handleDelete(post.id)}
            >
              Delete Post
            </button>

            <p className="font-body sm:text-2xl  font-noticia">{post.body}</p>
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
