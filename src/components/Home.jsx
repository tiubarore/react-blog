import Feed from "./Feed";

const Home = ({ posts }) => {
  return (
    <main className="Home">
      <p className="text-center">There are {posts.length} articles.</p>
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p className="text-center">No posts to display.</p>
      )}
    </main>
  );
};

export default Home;
