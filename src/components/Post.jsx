import { Link } from "react-router";

function Post({ post }) {
  return (
    <article className="my-5 xl:px-32 px-6">
      <Link to={`./post/${post.id}`}>
        <h2 className="text-2xl font-bold font-display">{post.title}</h2>
        <p className="font-thin text-gray-500">{post.datetime}</p>
      </Link>
      <p className="font-noticia">
        {post.body.length <= 50 ? post.body : `${post.body.slice(0, 350)}...`}
      </p>
    </article>
  );
}
export default Post;
