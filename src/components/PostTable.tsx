import type { Post } from "../hooks/usePosts";
import { Link } from "react-router-dom";

export default function PostTable({ posts }: { posts: Post[] }) {
  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="w-100" style={{ maxWidth: "900px" }}>
        <table className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>
                  <Link
                    to={`/post/${post.id}`}
                    className="btn btn-sm btn-outline-primary"
                  >
                    Ver detalles
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
