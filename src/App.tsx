import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import PostDetail from './components/PostDetail';
import PostListContainer from './containers/PostListContainer';
import { AuthProvider, useAuth } from './context/AuthContext';
import type { JSX } from 'react';

function PrivateRoute({ children }: { children: JSX.Element }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" />;
}

export default function App() {
  return (
    <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/posts"
            element={<PrivateRoute><PostListContainer /></PrivateRoute>}
          />
          <Route
            path="/post/:id"
            element={<PrivateRoute><PostDetail /></PrivateRoute>}
          />
        </Routes>
    </AuthProvider>
  );
}