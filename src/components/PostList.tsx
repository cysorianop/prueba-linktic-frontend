import { Link } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

function PostList() {
  const { posts, loading, error } = usePosts();

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className={styles.container}>
      <h1>Lista de Posts</h1>
      <ul className={styles.list}>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`} className={styles.link}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
