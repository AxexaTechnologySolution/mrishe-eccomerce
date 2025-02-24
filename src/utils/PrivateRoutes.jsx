import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function PrivateRoutes({ redirectPath = '/login' }) {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('token') !== null;

  if (!isAuthenticated) {
    // Redirect to login page with the return URL
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export function AdminRoute({ redirectPath = '/' }) {
  const location = useLocation();
  const isAdmin = localStorage.getItem('role') === 'admin';

  if (!isAdmin) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  return <Outlet />;
}
