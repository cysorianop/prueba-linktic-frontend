import type { Post } from "../hooks/usePosts";
import { Link } from "react-router-dom";
import { useState } from "react";

const POSTS_PER_PAGE = 5;

export default function PostTable({ posts }: { posts: Post[] }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

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
            {currentPosts.map((post) => (
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

        {/* Controles de paginación */}
        <div className="d-flex justify-content-between align-items-center mt-3">
          <button
            className="btn btn-sm btn-secondary"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </button>

          <span>Página {currentPage} de {totalPages}</span>

          <button
            className="btn btn-sm btn-secondary"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}