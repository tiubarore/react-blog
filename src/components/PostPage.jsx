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
            <div className="text-center">
              <button
                className="me-2 text-white font-poppins rounded cursor-pointer font-semibold bg-red-600 p-2.5 text-center hover:bg-red-800"
                onClick={() => handleDelete(post.id)}
              >
                Delete Post
              </button>

              <Link to={`/post/${post.id}/edit`}>
                <button className="border p-2 hover:bg-black hover:text-white cursor-pointer">
                  Edit Post
                </button>
              </Link>
            </div>

            <p className="leading-8 font-body sm:text-2xl font-poppins">
              {post.body}
            </p>
          </>
        )}
        {!post && (
          <>
            <h1 className="text-2xl">No post available</h1>
            <Link to="/">Return Home</Link>
          </>
        )}
      </article>
    </main>
  );
}
export default PostPage;
