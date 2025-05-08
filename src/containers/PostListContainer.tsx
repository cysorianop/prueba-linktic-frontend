import { usePosts } from '../hooks/usePosts';
import PostTable from '../components/PostTable';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import Header from '../components/Header';

export default function PostListContainer() {
  const { posts, loading, error } = usePosts();
  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  return (
    <>
      <Header />
      <PostTable posts={posts} />
    </>
  );
}