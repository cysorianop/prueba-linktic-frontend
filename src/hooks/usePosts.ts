import { useState, useEffect } from "react";
import { fetchPosts } from "../services/api";

export interface Post {
  id: number;
  title: string;
  body: string;
}

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setError("Error cargando los posts");
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return { posts, loading, error };
};