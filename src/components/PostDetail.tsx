import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPostById } from "../services/api";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
//import '../styles/PostDetail.module.css';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const loadPost = async () => {
      try {
        const data = await fetchPostById(id!);
        setPost(data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setError("Error cargando el post");
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h4 className="card-title">{post?.title}</h4>
          <p className="card-text">{post?.body}</p>
          <Link to="/posts" className="btn btn-secondary mt-3">
            Volver
          </Link>
        </div>
      </div>
    </div>
  );
}
